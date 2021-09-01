import { Grid, Row, Col } from 'react-flexbox-grid';
import TrainingOptionBox from '../../Components/TrainingOptionBox';

const HomePage = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
    <Grid fluid>
      <Row>
        <Col md={4} sm={6}>
          <TrainingOptionBox
            testName="Treino de LEITURA e SIGNIFICADO"
            testDescription="Um kanji é sorteado, e devesse determinar quais são suas leituras (kunyomi, onyomi) e qual é seu significado."
            urlTeste="1"
          />
        </Col>
        <Col md={4} sm={6}>
          <TrainingOptionBox
            testName="Treino de KANJI e LEITURA (FACIL)"
            testDescription="Um significado é sorteado. A partir desse significado deve-se escolher, entre 5 cards, qual kanji e leituras que representam esse significado dado."
            urlTeste="2"
          />
        </Col>
        <Col md={4} sm={6}>
          <TrainingOptionBox
            testName="Treino de KANJI e LEITURA (DIFICIL)"
            testDescription="Um significado é sorteado. A partir desse significado é pedido o kanji e as leituras que satisfazem esse significado."
            urlTeste="3"
          />
        </Col>
        <Col md={4} sm={6}>
          <TrainingOptionBox
            testName="Treino de KANJI"
            testDescription="São dadas as leituras (onyomi e kunyomi) de um kanji, além do seu significado, e é pedido o kanji."
            urlTeste="4"
          />
        </Col>
      </Row>
    </Grid>
    </div>
  );
};

export default HomePage;