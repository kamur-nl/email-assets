import * as React from "react";
import { Column, Container, Font, Head, Html, Link, Row, Section, Tailwind } from "@react-email/components";

interface BaseProps {
    lang?: 'nl' | 'en',
    children: React.ReactNode;
}

export const Base = ({ lang, children }: BaseProps) => {
  
    return (
        <Html lang={lang ? lang : 'nl'}>
            <Head>
                <Font
                fontFamily="Inter"
                fallbackFontFamily="Verdana"
                webFont={{
                    url: "https://fonts.gstatic.com/s/inter/v19/UcC73FwrK3iLTeHuS_fjbvMwCp504jAa2JL7W0Q5n-wU.woff2",
                    format: "woff2",
                }}
                fontWeight={400}
                fontStyle="normal"
                />
            </Head>
            <Tailwind
                config={{
                    theme: {
                        extend: {
                            colors: {
                                "primary-black": "oklch(0% 0 0)",
                                "primary-white": "oklch(100% 0 263.28)",
                                "top-purple-50": "oklch(52.42% 0.23 299.94)",
                                "top-purple-100": "oklch(40.92% 0.201 297.45)",
                                "top-purple-200": "oklch(35.3% 0.185 295.36)",
                                "top-purple-300": "oklch(29.68% 0.153 296.38)",
                                "top-yellow-500": "oklch(79.77% 0.164 82.71)",
                                "top-yellow-700": "oklch(55.48% 0.127 62.52)",
                                "sand-50": "oklch(99.42% 0.007 88.71)",
                                "sand-100": "oklch(95.54% 0.013 71.26)",
                                "sand-200": "oklch(91% 0.025 71.42)",
                                "sand-300": "oklch(83.92% 0.034 70.25)",
                                "amber-grey-50": "oklch(98.48% 0.001 107.98)",
                                "amber-grey-100": "oklch(97.78% 0.003 129.74)",
                                "amber-grey-200": "oklch(93.71% 0.007 53.1)",
                                "amber-grey-300": "oklch(89.14% 0.01 67.58)",
                                "amber-grey-400": "oklch(72.63% 0.015 67.53)",
                                "amber-grey-500": "oklch(56.78% 0.018 67.42)",
                                "amber-grey-600": "oklch(45.54% 0.014 79.71)",
                                "amber-grey-700": "oklch(38.21% 0.012 72.44)",
                                "amber-grey-800": "oklch(27.34% 0.008 43.04)",
                                "amber-grey-900": "oklch(22.01% 0.007 67.39)",
                            },
                            fontSize: {
                                "subtitle-2": ["1.25rem", { lineHeight: "1.875rem", letterSpacing: "0rem", fontWeight: "500" }],
                                "subtitle-3": ["1.125rem", { lineHeight: "1.688rem", letterSpacing: "0rem", fontWeight: "500" }],
                                "subtitle-4": ["1rem", { lineHeight: "1.5rem", letterSpacing: "0rem", fontWeight: "500" }],
                                "base-1": ["1.125rem", { lineHeight: "1.688rem", letterSpacing: "0rem", fontWeight: "400" }],
                                "base-2": ["1rem", { lineHeight: "1.5rem", letterSpacing: "0rem", fontWeight: "400" }],
                                "base-3": ["0.875rem", { lineHeight: "1.313rem", letterSpacing: "0rem", fontWeight: "400" }],
                                "caption-1": ["0.75rem", { lineHeight: "1.125rem", letterSpacing: "0rem", fontWeight: "400" }],
                                "link-1": ["1.125rem", { lineHeight: "1.688rem", letterSpacing: "0rem", fontWeight: "400" }],
                                "link-2": ["1rem", { lineHeight: "1.5rem", letterSpacing: "0rem", fontWeight: "400" }],
                                "link-3": ["0.875rem", { lineHeight: "1.313rem", letterSpacing: "0rem", fontWeight: "400" }],
                                "subtitle-5": ["0.875rem", { lineHeight: "1.313rem", letterSpacing: "0rem", fontWeight: "500" }],
                            },
                            boxShadow: {
                                overlay: "0rem 0.25rem 0.5rem 0rem oklch(0% 0 0 / 25%)",
                            },
                        },
                    },
              }}
            >
                <Section className={'bg-sand-100 py-8 px-2 text-base-2'}>
                    <Row>
                        <Column align="center">
                            Kamur Logo
                        </Column>
                    </Row>
                    <Container className={'bg-primary-white px-6 py-5'}>
                        {children}
                    </Container>
                    <Section className={'text-amber-grey-600 text-base-3 mt-6'}>
                        <Row>
                            <Column align="center">
                                Alle rechten voorbehouden © 2025 Kamur.nl
                            </Column>
                        </Row>
                        <Row>
                            <Column align="center">
                                Vrouwenpolder 7, 3825LN Amersfoort, Nederland
                            </Column>
                        </Row>
                        <Row>
                            <Column align="center" className={'flex gap-x-1 flex-wrap justify-center'}>
                                <Link 
                                    href={'https://kamur.nl/profile/notifications'} 
                                    className={'underline text-amber-grey-600'}
                                >
                                    Meldingen instellen
                                </Link> 
                                of 
                                <Link 
                                    href={'https://kamur.nl/unsubscribe?token='}
                                    className={'underline text-amber-grey-600'}
                                >
                                    uitschrijven
                                </Link>
                            </Column>
                        </Row>
                    </Section>
                </Section>
            </Tailwind>
        </Html>
    );
}

export default Base;