import { Heading, Hr, Text } from "@react-email/components";
import Base, { BaseProps } from "../components/Base";
import Button from "../components/Button";

export interface VerifyProps {
    recoveryToken: string;
    email: string;
}

export const ResetPassword = ({ email, recoveryToken, ...props }: VerifyProps & BaseProps) => {
    return (
        <Base {...props}>
            <Heading
                as="h1" 
                mt={0}
                mb={4}
                style={{ fontSize: "18px", fontWeight: 500 }}
            >
                Your password reset code
            </Heading>
            <Text style={{ marginTop: 0 }}>
                Use the following code to reset your password:
            </Text>
            
            <Button 
                style={{ 
                    padding: "10px 0px 10px !important",
                    textAlign: "center", 
                    width: "100%" 
                }} 
                variant={'primary'} 
                href={`https://kamur.nl/auth/recover-password?token=${recoveryToken}&email=${email}`}
            >
                Reset Password
            </Button>
            <Hr />
            <Text style={{ marginBottom: 0, fontSize: "12px", lineHeight: "1.5" }}>
                Als je deze e-mail niet verwachtte, heeft iemand anders misschien per ongeluk je e-mailadres ingevuld.<br />
                Vragen? We staan voor je klaar om je vragen te beantwoorden.
            </Text>
        </Base>
    )
}

export default ResetPassword;