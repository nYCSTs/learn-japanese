import { React, useEffect, useState } from "react";
import PageHeader from "../../Components/PageHeader";
import { getKanjisList } from '../../Services/Axios/kanjiServices';
import { shuffleKanjiList } from '../../Utilities/usefulFunctions';

// Styles
import {
    Test, Question, Button, Cards, Card, Kanji, OnKun,
} from './Style';

const Test2Page = () => {
    const [showButton, setShowButton] = useState(true);
    const [kanjisList, setKanjisList] = useState([]);
    const [question, setQuestion] = useState('');

    const getKanjisListFromAPI = () => {
        getKanjisList()
        .then((response) => setKanjisList(response.data));
    }

    useEffect(() => {
        getKanjisListFromAPI();
    }, []);

    useEffect(() => {
        gerarPergunta();
    }, [kanjisList]);

    const teste = () => {
        if (showButton) {
            return (
                <div style={{ textAlign: 'center', fontSize: '42px', marginBottom: '62px' }}>
                    <Button onClick={() => setShowButton(!setShowButton)}>Mostrar cartas</Button>
                </div>
            );
        } else {
            return (
                <Cards>
                    {kanjisList.slice(0, 5).map((data, idx) => {
                        return (
                            <Card key={idx} onClick={() => verificarResposta(data.meaning.join(', '))}>
                                <Kanji>{data.kanji}</Kanji>
                                <OnKun>
                                    <p style={{ fontWeight: "bold", textDecoration: "underline"}}>Onyomi:</p>
                                    <p>{data.onyomi.join(', ')}</p>
                                </OnKun>
                                <OnKun>
                                    <p style={{ fontWeight: "bold", textDecoration: "underline"}}>Kunyomi:</p>
                                    <p>{data.kunyomi[0].meaning.join(', ')}</p>
                                </OnKun>
                            </Card>
                        )
                    })}
                </Cards>
            )
        };
    };

    const gerarPergunta = () => {
        // setQuestion(kanjisList[Math.floor(Math.random(10) * 4)]?.kanjiMeaning.join(', '))
        setQuestion(kanjisList[0]?.kanjiMeaning.join(', '))
    }

    const verificarResposta = (meaning) => {
        if (question === meaning) {
            alert("Correto!");
        } else {
            alert("Errado :(");
        }
        shuffleKanjiList(kanjisList);
        gerarPergunta();
        setShowButton(true);
    }

    return (
        <>
            <PageHeader />
            <Test>
                <Question>{question}</Question>
                {teste()}
            </Test>
        </>
    )
} 

export default Test2Page;