import { React, useEffect, useState } from 'react';
import PageHeader from '../../Components/PageHeader';
import {
    Test, Question, Reading, Buttons, OnKun, P,
} from './Style';
import { getKanjisList } from '../../Services/Axios/kanjiServices';

const Test4Page = () => {
    const [kanjisList, setKanjisList] = useState([]);
    const [showClue, setShowClue] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);

    const exibirDica = () => {
        if (showClue) {
            const randomRadicalIndex = Math.floor(Math.random() * kanjisList[0].radicals.length);
            return (
                <div>
                    <P>Radical: </P>
                    <Reading>{kanjisList[0].radicals[randomRadicalIndex].shape} ({kanjisList[0].radicals[randomRadicalIndex].meaning})</Reading>
                </div>
            )
        }
    }
 
    const verificarResposta = () => {
        if (showAnswer) {
            return (
                <div style={{ margin: '0px auto', width: '80%', backgroundColor: 'red' }}>
                    <button onClick={() => setShowAnswer(false)}>Fechar</button>
                </div>
            )
        } 
    }

    useEffect(() => {
        getKanjisList()
        .then((response) => setKanjisList(response.data));
    }, []);

    return (
        <>
            <PageHeader />
            <Test>
                <h1 style={{ textAlign: 'center' }}>Leituras:</h1>
                <Question>
                    <OnKun>
                        <P>Onyomi:</P>
                        <Reading>{kanjisList[0]?.onyomi}</Reading>
                        <P>Kunyomi:</P>
                        <Reading>{kanjisList[0]?.kunyomi.map((leitura) => leitura.reading).join(', ')}</Reading>
                    </OnKun>
                    {exibirDica()}
                </Question>
                
                <Buttons>
                    <button onClick={() => setShowClue(true)}>Dica</button>
                    <button onClick={() => setShowAnswer(true)}>Verificar resposta</button> 
                </Buttons>
            </Test>
            {verificarResposta()}
        </>
    );
};

export default Test4Page;