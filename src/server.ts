import express, { Request, Response, NextFunction } from 'express';
import React from 'react';
import { render } from '@react-email/render';

import Welcome, { WelcomeProps } from './emails/welcome/Welcome';

const templates = {
  Welcome: {
    component: Welcome,
    props: {} as WelcomeProps,
  },
};

type EmailTemplates = typeof templates;
type TemplateName = keyof EmailTemplates;

const app = express();
app.use(express.json());

function asyncHandler<
  P = any,
  ResBody = any,
  ReqBody = any,
  ReqQuery = any
>(
  fn: (req: Request<P, ResBody, ReqBody, ReqQuery>, res: Response) => Promise<any>
) {
  return (req: Request<P, ResBody, ReqBody, ReqQuery>, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res)).catch(next);
}

async function renderEmail(
  templateName: TemplateName,
  props: any,
  plainText?: boolean,
  token?: string,
  preview?: string,
  lang?: 'en' | 'nl',
): Promise<string> {
  const TemplateComponent = templates[templateName]?.component;
  if (!TemplateComponent) {
    throw new Error(`Template '${templateName}' not found.`);
  }

  return await render(
    React.createElement(TemplateComponent, { ...props, token, lang, preview }),
    { plainText }
  );
}

app.post(
  '/',
  asyncHandler(async (req: Request, res: Response) => {
    const { templateName, props, plainText, token, preview, lang } = req.body as {
      templateName: TemplateName;
      props: any;
      plainText?: boolean;
      token?: string;
      preview?: string;
      lang?: 'en' | 'nl';
    };

    try {
      const html = await renderEmail(templateName, props, plainText, token, preview, lang);
      res.setHeader('Content-Type', 'text/html');
      res.send(html);
    } catch (error) {
      res.status(400).send((error as Error).message);
    }
  })
);

app.listen(3587, () => {
  console.log('Server running at http://localhost:3587/email');
});