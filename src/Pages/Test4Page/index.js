import { useEffect, useState } from 'react';
import QuestionBox from '../../Components/QuestionBox';
import { getShuffledKanjiList } from '../../Services/Axios/kanjiServices';
import {
    Main, TipField, Tip, Reading, Button, AnswerBox,
} from './Style';

const Test4Page = () => {
    const [kanjisList, setKanjisList] = useState([]);
    const [showTip, setShowTip] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false);
    const [question, setQuestion] = useState();

    const gerarPergunta = (status) => {
        if (status) {
            kanjisList.push(kanjisList.shift());
        } else {
            kanjisList.splice(kanjisList.length / 2, 0, kanjisList.shift());
        }
        setShowAnswer(false);
        setShowTip(false);
        setQuestion(kanjisList[0]);
    };

    useEffect(async () => {
        const getKanjisFromAPI = async () => {
            await getShuffledKanjiList()
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
                            <div style={{ marginBottom: '12px'}}>
                                <Reading>Onyomi:</Reading>
                                <p style={{ margin: '0' }}>{question?.onyomi.join(', ')}</p>
                            </div>
                            <div style={{ marginBottom: '12px'}}>
                                <Reading>Kunyomi:</Reading>
                                {question?.kunyomi.map((v) => {
                                    return <p style={{ margin: '0' }}>{`${v.reading}${v.meaning[0] !== '' ? ` (${v.meaning.join(', ')})` : ''}`}</p>
                                })}
                            </div>
                            <div style={{ marginBottom: '12px'}}>
                                <Reading>Significado:</Reading>
                                <p>{question?.kanjiMeaning.join(', ')}</p>
                            </div>
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
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Button onClick={() => gerarPergunta(1)}>Acertei</Button>
                    <Button onClick={() => gerarPergunta(0)}>Errei</Button>
                    </div>
                    
                </AnswerBox>
            ): null}
        </>
    );
};

export default Test4Page;