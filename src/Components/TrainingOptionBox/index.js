import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    TrainingBox, Name, Description, Button, ButtonDiv,
} from './Style';

const TrainingOptionBox = ({ testName, testDescription, urlTeste }) => {
    const history = useHistory();

    const teste = () => {
        history.push(`/teste/${urlTeste}`);
    };
    
    return (
        <TrainingBox>
            <Name>
                {testName}
            </Name>
            <Description>
                {testDescription}
            </Description>
            <ButtonDiv>
                <Button onClick={teste}>Iniciar</Button>
            </ButtonDiv>
        </TrainingBox>
    );
};

export default TrainingOptionBox;