import { useHistory } from 'react-router-dom';
import {
  TrainingCard, Name, Description, Button, ButtonDiv, TestInfo,
} from './Style';

const TrainingOptionBox = ({ testName, testDescription, urlTeste }) => {
  const history = useHistory();

  const testRedirect = () => {
    history.push(`/teste/${urlTeste}`);
  };

  return (
    <TrainingCard>
      <TestInfo>
        <Name>
          {testName}
        </Name>
        <Description>
          {testDescription}
        </Description>
      </TestInfo>
      <ButtonDiv>
        <Button onClick={() => testRedirect()}>Iniciar</Button>
      </ButtonDiv>
    </TrainingCard>
  );
};

export default TrainingOptionBox;