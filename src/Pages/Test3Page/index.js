import { React, useEffect, useState } from 'react';
import PageHeader from '../../Components/PageHeader';
import { getKanjisList } from '../../Services/Axios/kanjiServices';
import {
    Test, Question, Field, Answer, Submit, Button, P
} from '../Test1Page/Style';

const Test2Page = () => {
    const [kanjisList, setKanjisList] = useState([]);
    const [question, setQuestion] = useState('');
    // Resposta
    const [onyomiReadingAnswer, setOnyomiReadingAnswer] = useState([]); // Leitura onyomi       - Resposta
    const [kunyomiReadingAnswer, setKunyomiReadingAnswer] = useState([]); // Leitura kunyomi    - Resposta
    const [kanjiAnswer, setKanjiAnswer] = useState([]); // Significado do kanji   - Resposta
    // Resposta do usuario
    const [onyomiReading, setOnyomiReading] = useState([]); // Leitura onyomi                   - Usuario
    const [kunyomiReading, setKunyomiReading] = useState([]); // Leitura kunyomi                - Usuario
    const [kanji, setKanji] = useState(''); // Significado do kanji               - Usuario

    const getKanjisListFromAPI = () => {
        getKanjisList()
        .then((response) => setKanjisList(response.data));
    };

    const gerarPergunta = () => {
        //Pergunta
        setQuestion(kanjisList[0]?.meaning.join(', '));
        setOnyomiReadingAnswer(kanjisList[0]?.onyomiReading);
        setKunyomiReadingAnswer(kanjisList[0]?.kunyomiReading);
        setKanjiAnswer(kanjisList[0]?.kanji);
    };

    const verificarResposta = () => {
        if (kanji === kanjiAnswer) {
            // Correta
            if (onyomiReadingAnswer.length === onyomiReading.length && kunyomiReadingAnswer.length === kunyomiReading.length) {
                onyomiReading.sort();
                onyomiReadingAnswer.sort();
                kunyomiReading.sort();
                kunyomiReadingAnswer.sort();
                if (onyomiReading === onyomiReadingAnswer && kunyomiReading === kunyomiReadingAnswer) {
                    kanjisList[kanjisList.length - 1] = kanjisList.shift();
                    alert("100% Correta!");
                } else {
                    alert("Parcialmente Correta");
                    kanjisList.splice(kanjisList.length / 2, 0, kanjisList.shift());
                }
            }
            // Parcial 
            else {
                alert("Parcialmente Correta");
                kanjisList.splice(kanjisList.length / 2, 0, kanjisList.shift());
            }
        } else {
            kanjisList.splice(kanjisList.length / 2, 0, kanjisList.shift());
            alert("Resposta errada :(");
        }
        gerarPergunta();
        setOnyomiReading('');
        setKunyomiReading('');
        setKanji('');

    }

    useEffect(() => {
        getKanjisListFromAPI();
    }, []);

    useEffect(() => {
        gerarPergunta();
    }, [kanjisList]);

    return (
        <>
            <PageHeader />
            <Test>
                <Question>
                    {question}
                </Question>
                <Answer>
                    <Field>
                        <P>Kanji: </P>
                        <input value={kanji} onChange={(e) => setKanji(e.target.value)}/>
                    </Field>
                    <Field>
                        <P>Leitura Onyomi: </P>
                        <input value={onyomiReading} onChange={(e) => setOnyomiReading(e.target.value)}/>
                    </Field>
                    <Field>
                        <P>Leitura Kunyomi: </P>
                        <input value={kunyomiReading} onChange={(e) => setKunyomiReading(e.target.value)}/>
                    </Field>
                </Answer>
                <Submit>
                    <Button onClick={verificarResposta}>Responder</Button>
                </Submit>
            </Test>
        </>
    );
};

export default Test2Page;