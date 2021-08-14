import { useHistory } from 'react-router-dom';
import {
    TrainingCard, Name, Description, Button, ButtonDiv,
} from './Style';

const TrainingOptionBox = ({ testName, testDescription, urlTeste }) => {
    const history = useHistory();

    const testRedirect = () => {
        history.push(`/teste/${urlTeste}`);
    };
    
    return (
        <TrainingCard>
            <Name>
                {testName}
            </Name>
            <Description>
                {testDescription}
            </Description>
            <ButtonDiv>
                <Button onClick={() => testRedirect()}>Iniciar</Button>
            </ButtonDiv>
        </TrainingCard>
    );
};

export default TrainingOptionBox;