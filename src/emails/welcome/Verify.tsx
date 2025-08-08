import { Column, Heading, Hr, Row, Text } from "@react-email/components";
import Base, { BaseProps } from "../components/Base";
import Button from "../components/Button";

export interface VerifyProps {
    verifyToken: string;
    email: string;
}

export const Verify = ({ email, verifyToken, ...props }: VerifyProps & BaseProps) => {
  
    return (
        <Base {...props}>
            <Heading 
                as="h1" 
                mt={0}
                mb={4}
                style={{ fontSize: "18px", fontWeight: 500 }}
            >
                Verifiëer je e-mailadres
            </Heading>
            <Text style={{ marginTop: 0 }}>
                Verifiëer je e-mailadres om je registratie af te ronden. 
            </Text>
            <Button 
                style={{ 
                    padding: "10px 0px 10px !important",
                    textAlign: "center", 
                    width: "100%" 
                }} 
                variant={'primary'} 
                href={`https://kamur.nl/auth/verify?token=${verifyToken}&email=${email}`}
            >
                Verifieer je account
            </Button>
            <Hr />
            <Text style={{ marginBottom: 0, fontSize: "12px", lineHeight: "1.5" }}>
                Als je deze e-mail niet verwachtte, heeft iemand anders misschien per ongeluk je e-mailadres ingevuld.<br />
                Vragen? We staan voor je klaar om je vragen te beantwoorden.
            </Text>
        </Base>
    );
}

export default Verify;