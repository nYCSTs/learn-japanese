import { useEffect, useState } from 'react';
import QuestionBox from '../../Components/QuestionBox';
import { getKanjisList } from '../../Services/Axios/kanjiServices';
import {
    Main, TipField, Tip, Reading, Button, AnswerBox,
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
        const getKanjisFromAPI = async () => {
            await getKanjisList()
            .then((response) => setKanjisList(response.data));
        };
        getKanjisFromAPI();
    }, []);

    useEffect(() => {
        setQuestion(kanjisList[0]);
    }, [kanjisList]);

    return (
        <>
            <QuestionBox
                title="Leituras" 
                kanji={question?.kanji}
                children={
                    <Main>
                        <div>
                            <Reading>Onyomi:</Reading>
                            <p style={{ margin: '0' }}>{question?.onyomi.join(', ')}</p>
                            <Reading>Kunyomi:</Reading>
                            {question?.kunyomi.map((v) => {
                                return <p style={{ margin: '0' }}>{`${v.reading} (${v.meaning.join(', ')})`}</p>
                            })}
                        </div>
                        <TipField>
                            {showTip ? (
                                <Tip>{question?.radicals[0].shape}</Tip>
                            ) : <Tip style={{ opacity: '0' }}>_</Tip>}
                            <div>
                                <Button onClick={() => setShowTip(true)}>Exibir dica</Button>
                            </div>
                        </TipField>
                    </Main>
                }
                buttonText="Verificar"
                buttonFunction={() => setShowAnswer(true)}
            />
            {showAnswer ? (
                <AnswerBox>
                    <p style={{ fontSize: '26px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>Resposta: {question?.kanji}</p>
                    <Button onClick={() => gerarPergunta()}>Nova Pergunta</Button>
                </AnswerBox>
            ): null}
        </>
    );
};

export default Test4Page;