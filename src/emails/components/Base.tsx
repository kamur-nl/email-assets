import * as React from "react";
import { Column, Container, Font, Head, Html, Img, Link, Preview, Row, Section, Tailwind, Text } from "@react-email/components";

export interface BaseProps {
    lang?: 'nl' | 'en';
    token: string;
    preview: string;
    children: React.ReactNode;
}

export const Base = ({ lang, token, preview, children }: BaseProps) => {
  
    return (
        <Html lang={lang ? lang : 'nl'}>
            <Head>
                <meta name="color-scheme" content="light" />
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
            <Preview>{preview}</Preview>
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
                            boxShadow: {
                                overlay: "0rem 0.25rem 0.5rem 0rem oklch(0% 0 0 / 25%)",
                            },
                        },
                    },
              }}
            >
                <Section 
                    style={{ 
                        padding: "32px 8px",
                        backgroundColor: "#f6efe7", 
                        color: "#47423c" 
                    }}
                >
                    <Row style={{ marginBottom: "24px" }}>
                        <Column align="center">
                            <Link href="https://kamur.nl">
                                <Img src="https://i.ibb.co/My9d1FsM/image.png" alt="Logo" width="139" height="30" />
                            </Link>
                        </Column>
                    </Row>
                    <Container
                        style={{ 
                            backgroundColor: "#fff", 
                            color: "#47423c",
                            padding: "20px 24px"
                         }}
                    >
                        {children}
                    </Container>
                    <Section style={{ fontSize: "12px", color: "#5b564e" }}>
                        <Row style={{ marginBottom: "8px", marginTop: "24px" }}>
                            <Column align="center">
                                <Link href="https://kamur.nl">
                                    <Img src="https://i.ibb.co/My9d1FsM/image.png" alt="Logo" width="93" height="20" />
                                </Link>
                            </Column>
                        </Row>
                        <Row>
                            <Column align="center">
                                © 2025 Kamur.nl - Alle rechten voorbehouden
                            </Column>
                        </Row>
                        <Row>
                            <Column align="center">
                                Vrouwenpolder 7, 3825LN Amersfoort, Nederland
                            </Column>
                        </Row>
                        <Row>
                            <Column align="center">
                                <Link 
                                    href={'https://kamur.nl/profile/notifications'} 
                                    style={{ textDecoration: "underline", color: "#47423c" }}
                                >
                                    Meldingen instellen
                                </Link>
                                &nbsp;&nbsp;•&nbsp;&nbsp;
                                <Link 
                                    href={`https://kamur.nl/unsubscribe?token=${token}`}
                                    style={{ textDecoration: "underline", color: "#47423c" }}
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