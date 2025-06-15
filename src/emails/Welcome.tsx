import Base from "./components/Base";
import Button from "./components/Button";

interface WelcomeProps {
    name: string
}

export const Welcome = ({ name }: WelcomeProps) => {
  
    return (
        <Base>
            <Button variant={'primary'} href={'https://weijers.one'}>
                Lidmaatschap beheren {name}
            </Button>
        </Base>
    );
}

export default Welcome;