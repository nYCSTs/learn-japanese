import React from 'react';
import {
    Page, TrainingList, Footer,
} from './Style';
import TrainingOptionBox from '../../Components/TrainingOptionBox';
import PageHeader from '../../Components/PageHeader';

const HomePage = () => {
    return (
        <Page>
            <PageHeader />
            <TrainingList>
                <TrainingOptionBox testName="Treino de leitura e significado dos kanjis" testDescription="É dado um kanji, e com ele é pedido a sua leitura e seu significado." urlTeste="1" />
                <TrainingOptionBox testName="Treino de kanji e leitura" testDescription="A partir de um significado, decida entre 5 opções que corresponda a esse significado." urlTeste="2" />
                <TrainingOptionBox testName="Treino de kanji e leitura" testDescription="É fornecido um SIGNIFICADO e é pedido o kanji que corresponde a esse significado, assim como sua leitura ONYOMI e KUNYOMI (DIFICIL)" urlTeste="3" />
                <TrainingOptionBox testName="Treino de significado e kanji" testDescription="É fornecido ambas as leituras (onyomi e kunyomi). É pedido qual kanji corresponde as leituras dadas, assim como o seu significado." urlTeste="4" />
            </TrainingList>
            <hr/>
            <Footer>
                <h1>Feito por <a style={{ textDecoration: 'none', color: 'blue' }} href="https://github.com/nYCSTs/">Lucas</a></h1>
            </Footer>
        </Page>
    );
};

export default HomePage;