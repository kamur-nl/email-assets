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
    return (req: Request<P, ResBody, ReqBody, ReqQuery>, res: Response, next: NextFunction) => {
        Promise.resolve(fn(req, res)).catch(next);
    };
}

async function renderAndSendEmail(
    templateName: TemplateName,
    props: any,
    token: string,
    res: Response,
    plainText?: boolean
) {
    const TemplateComponent = templates[templateName]?.component;
    if (!TemplateComponent) {
        res.status(400).send(`Template '${templateName}' not found.`);
        return;
    }

    const html = await render(
        React.createElement(TemplateComponent, { ...props, token }),
        { plainText }
    );

    res.setHeader('Content-Type', 'text/html');
    res.send(html);
}

app.post(
    '/',
    asyncHandler(async (req: Request, res: Response) => {
        const { templateName, props, token, plainText } = req.body as {
            templateName: TemplateName;
            props: any;
            token: string;
            plainText?: boolean;
        };

        if (!token) {
            res.status(400).send("Missing required fields: 'token'");
            return;
        }

        await renderAndSendEmail(templateName, props, token, res, plainText);
    })
);

app.listen(3587, () => {
    console.log('Server running at http://localhost:3587/email');
});