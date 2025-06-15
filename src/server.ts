import express, { Request, Response, NextFunction } from 'express';
import React from 'react';
import { render } from '@react-email/render';

import Welcome from './emails/Welcome';

interface EmailTemplates {
    Welcome: { name: string };
}

const templates: {
    [K in keyof EmailTemplates]: React.FC<EmailTemplates[K]>
} = {
    Welcome,
};

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

app.post(
    '/email',
    asyncHandler(async (req: Request, res: Response) => {
        const { templateName, props } = req.body as {
            templateName: keyof EmailTemplates;
            props: any;
        };

        const TemplateComponent = templates[templateName];
        if (!TemplateComponent) {
            res.status(400).send(`Template '${templateName}' not found.`);
            return;
        }

        const html = await render(React.createElement(TemplateComponent, props));
        res.setHeader('Content-Type', 'text/html');
        res.send(html);
    })
);

app.listen(3587, () => {
    console.log('Server running at http://localhost:3587/email');
});