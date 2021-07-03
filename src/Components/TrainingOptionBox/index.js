import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    TrainingCard, Name, Description, Button, ButtonDiv, Content,
} from './Style';

const TrainingOptionBox = ({ testName, testDescription, urlTeste }) => {
    const history = useHistory();

    const teste = () => {
        history.push(`/teste/${urlTeste}`);
    };
    
    return (
        <TrainingCard>
            <Content>
                <Name>
                    {testName}
                </Name>
                <Description>
                    {testDescription}
                </Description>
            </Content>
            <ButtonDiv>
                <Button onClick={teste}>Iniciar</Button>
            </ButtonDiv>
        </TrainingCard>
    );
};

export default TrainingOptionBox;