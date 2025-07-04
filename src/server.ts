import express, { Request, Response, NextFunction } from 'express';
import React, { ComponentType } from 'react';
import { render } from '@react-email/render';
import * as EmailTemplates from './emails';

const app = express();
app.use(express.json());

type BaseProps = {
  token?: string;
  preview?: string;
  lang?: 'en' | 'nl';
};

type TemplateProps = Record<string, any>;

function asyncHandler(
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
) {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

async function renderEmail(
  templateName: string,
  props: TemplateProps = {},
  baseProps: BaseProps = {},
  plainText?: boolean
): Promise<string> {
  const TemplateComponent = (EmailTemplates as Record<string, ComponentType<any>>)[templateName];

  if (!TemplateComponent) {
    throw new Error(`Template '${templateName}' not found.`);
  }

  const combinedProps = { ...props, ...baseProps };

  return render(React.createElement(TemplateComponent, combinedProps), { plainText });
}

app.post(
  '/',
  asyncHandler(async (req: Request, res: Response) => {
    const { templateName, props = {}, plainText, token, preview, lang } = req.body as {
      templateName: string;
      props?: TemplateProps;
      plainText?: boolean;
      token?: string;
      preview?: string;
      lang?: 'en' | 'nl';
    };

    try {
      const html = await renderEmail(templateName, props, { token, preview, lang }, plainText);
      res.setHeader('Content-Type', 'text/html');
      res.send(html);
    } catch (error) {
      res.status(400).send((error as Error).message);
    }
  })
);

app.listen(3587, () => {
  console.log('Email rendering server running at http://localhost:3587/');
});