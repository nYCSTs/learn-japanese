import React from 'react';
import {
    Page, TrainingList, Footer, P,
} from './Style';
import TrainingOptionBox from '../../Components/TrainingOptionBox';

const HomePage = () => {
    return (
        <Page>
            <TrainingList>
                <TrainingOptionBox 
                    testName="Treino de LEITURA e SIGNIFICADO" 
                    testDescription="Um kanji é sorteado, e devesse determinar quais são suas leituras (kunyomi, onyomi) e qual é seu significado." 
                    urlTeste="1"
                />
                <TrainingOptionBox 
                    testName="Treino de KANJI e LEITURA (FACIL)"
                    testDescription="Um significado é sorteado. A partir desse significado deve-se escolher, entre 5 cards, qual kanji e leituras que representam esse significado dado." 
                    urlTeste="2"
                />
                <TrainingOptionBox 
                    testName="Treino de KANJI e LEITURA (DIFICIL)" 
                    testDescription="Um significado é sorteado. A partir desse significado é pedido o kanji e as leituras que satisfazem esse significado." 
                    urlTeste="3"
                />
                <TrainingOptionBox 
                    testName="Treino de KANJI e SIGNIFICADO"
                    testDescription="São dadas as leituras (onyomi e kunyomi) e é pedido o kanji e o significado que satisfaz essas leituras." 
                    urlTeste="4"
                />
                <TrainingOptionBox 
                    testName="Treino de KANJI"
                    testDescription="São dadas as leituras e os significados de um kanji, e é pedido qual kanji satisfaz as definições." 
                    urlTeste="5" 
                />
            </TrainingList>
            <Footer>
                <hr />
                <P>Feito por <a style={{ textDecoration: 'none', color: 'blue' }} href="https://github.com/nYCSTs/">Lucas</a></P>
            </Footer>
        </Page>
    );
};

export default HomePage;