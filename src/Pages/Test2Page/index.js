import { React, useEffect, useState } from "react";
import { getKanjisList } from '../../Services/Axios/kanjiServices';
import { shuffleKanjiList } from '../../Utilities/usefulFunctions';

// Styles
import {
    Test, Question, Button, Cards, Card, Kanji, OnKun, P,
} from './Style';

const Test2Page = () => {
    const [question, setQuestion] = useState();
    const [showButton, setShowButton] = useState(true);
    const [kanjisList, setKanjisList] = useState([]);

    const getKanjisListFromAPI = async () => {
        await getKanjisList()
        .then((response) => setKanjisList(response.data));
    };    

    const showCards = () => {
        if (showButton) {
            return (
                <div style={{ textAlign: 'center' }}>
                    <Button onClick={() => setShowButton(false)}>Mostrar cartas</Button>
                </div>
            );
        } else {
            return (
                <Cards>
                    {kanjisList.slice(0, 4).map((data, idx) => {
                        return (
                            <Card key={idx} onClick={() => verificarResposta(data.kanji)}>
                                <Kanji>{data.kanji}</Kanji>
                                <OnKun>
                                    <p style={{ fontWeight: "bold", textDecoration: "underline"}}>Onyomi:</p>
                                    <p>{data.onyomi.join(', ')}</p>
                                </OnKun>
                                <OnKun>
                                    <p style={{ fontWeight: "bold", textDecoration: "underline"}}>Kunyomi:</p>
                                    {data.kunyomi.map((r) => {
                                        return <P>{r.reading}</P>;
                                    })}
                                </OnKun>
                            </Card>
                        )
                    })}
                </Cards>
            )
        };
    };

    const gerarPergunta = () => {
        setQuestion(kanjisList[Math.floor(Math.random(10) * 4)]); 
    }

    const verificarResposta = (kanji) => {
        if (question?.kanji === kanji) {
            alert("Correto!");
        } else {
            alert("Errado :(");
        }
        shuffleKanjiList(kanjisList);
        gerarPergunta();
        setShowButton(true);
    }

    useEffect(() => {
        getKanjisListFromAPI();
    }, []);

    useEffect(() => {
        gerarPergunta();
    }, [kanjisList]);

    return (
        <>
            <Test>
                <Question>{question?.kanjiMeaning.join(', ')}</Question>
                <div>
                    {showCards()}
                </div>
            </Test>
        </>
    )
} 

export default Test2Page;