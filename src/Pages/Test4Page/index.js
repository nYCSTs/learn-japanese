import { useEffect, useState } from 'react';
import QuestionBox from '../../Components/QuestionBox';
import { getKanjisList } from '../../Services/Axios/kanjiServices';
import {
    Main, QuestionData, TipField, Tip, Reading, Button, AnswerBox,
} from './Style';

const Test4Page = () => {
    const [kanjisList, setKanjisList] = useState([]);
    const [showTip, setShowTip] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);
    const [question, setQuestion] = useState();

    const gerarPergunta = () => {
        setShowAnswer(false);
        setShowTip(false);
        kanjisList.push(kanjisList.shift());
        setQuestion(kanjisList[0]);
    };

    useEffect(async () => {
        await getKanjisList()
        .then((response) => setKanjisList(response.data));
    }, []);

    useEffect(() => {
        setQuestion(kanjisList[0]);
    }, [kanjisList]);

    return (
        <>
            <QuestionBox
                titleText="Leituras" 
                children={
                    <Main>
                        <QuestionData>
                            <Reading>Onyomi:</Reading>
                            <p>{question?.onyomi}</p>
                            <Reading>Kunyomi:</Reading>
                            <p>{question?.kunyomi.map((v) => {
                                return `${v.reading} (${v.meaning.join(', ')})`
                            }).join(', ')}</p>
                        </QuestionData>
                        <TipField>
                            {showTip ? (
                                <Tip>{question?.radicals[Math.floor(Math.random(10) * question?.radicals.length)].shape}</Tip>
                            ) : <Tip style={{ opacity: '0' }}>_</Tip>}
                            <div>
                                <Button onClick={() => setShowTip(true)}>Exibir dica</Button>
                            </div>
                        </TipField>
                    </Main>
                }
                buttonText="Confirmar"
                answerCheck={() => setShowAnswer(true)}
            />
            {showAnswer ? (
                <AnswerBox>
                    <h2>Resposta: {question?.kanji}</h2>
                    <Button onClick={() => gerarPergunta()}>Nova Pergunta</Button>
                </AnswerBox>
            ): null}
        </>
    );
};

export default Test4Page;