import { Heading, Text } from "@react-email/components";
import Base, { BaseProps } from "../components/Base";
import Button from "../components/Button";

export interface WelcomeProps {
    name: string;
}

export const Welcome = ({ name, ...props }: WelcomeProps & BaseProps) => {
  
    return (
        <Base {...props}>
            <Heading 
                as="h1" 
                mt={0}
                mb={4}
                style={{ fontSize: "18px", fontWeight: 500 }}
            >
                Welkom op Kamur.nl
            </Heading>
            <Text style={{ margin: 0 }}>
                Welkom bij Kamur.nl {name} - super dat je ons hebt gekozen voor je kamerzoektocht! We weten hoe belangrijk het is om snel een kamer te vinden, dus laten we meteen aan de slag gaan.
            </Text>
            <Text>
                1. Stel je profiel in<br />
                Last ons weten wie je bent en wat je zoekt, zodat we je beter kunnen helpen.
            </Text>
            <Text>
                2. Maak een zoekprofiel aan<br />
                Blijf altijd op de hoogte van nieuwe kamers die bij jouw voorkeuren passen.
            </Text>
            <Text>
                3. Installeer onze browserextensie<br />
                Automatiseer je zoektocht en reageer sneller op nieuwe listings.
            </Text>
            <Button variant={'success'} href={'https://kamur.nl/profile'}>
                Stel mijn profiel in
            </Button>
        </Base>
    );
}

export default Welcome;