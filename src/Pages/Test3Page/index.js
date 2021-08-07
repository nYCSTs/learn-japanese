import { useEffect, useState } from 'react';
import { getKanjisList } from '../../Services/Axios/kanjiServices';
import QuestionBox from '../../Components/QuestionBox';
import { 
    P, Input, InputField
} from '../../Constants/testStyles';
import { generateTestResults } from '../../Utilities/usefulFunctions';

const Test2Page = () => {
    const [kanjisList, setKanjisList] = useState([]);
    const [question, setQuestion] = useState();

    const [kanjiAnswer, setKanjiAnswer] = useState('');
    const [onyomiAnswer, setOnyomiAnswer] = useState('');
    const [kunyomiAnswer, setKunyomiAnswer] = useState('');

    const verificarResposta = () => {
        const [correct, wrong] = generateTestResults(kunyomiAnswer, question?.kunyomi.map((r) => r.reading));
        
        if (question?.kanji === kanjiAnswer.trim() && !wrong.length) {
            alert('Correto!');
        } else {
            if (correct.length) {
                alert('Incompleto');
            } else {
                alert('Errado');
            }
            alert(`Onyomi: ${question.onyomi.join(', ')}\n\nKunyomi: ${question.kunyomi.map((r) => `${r.reading}${r.meaning[0] !== '' ? ` (${r.meaning})` : ""}`).join(', ')}\n\nSignificado: ${question.kanjiMeaning.join(', ')}`)
        }
        setKanjiAnswer('');
        setOnyomiAnswer('');
        setKunyomiAnswer('');
        kanjisList.push(kanjisList.shift());
        setQuestion(kanjisList[0]);
    }

    useEffect(() => {
        const getKanjisListFromAPI = async () => {
            await getKanjisList()
            .then((response) => setKanjisList(response.data));
        };
        getKanjisListFromAPI();
    }, []);

    useEffect(() => {
        setQuestion(kanjisList[0]);
    }, [kanjisList]);

    return (
        <QuestionBox 
            title={question?.kanjiMeaning.join(', ')}
            kanji={question?.kanji}
            children={
                <InputField>
                    <P>Kanji: </P>
                    <Input value={kanjiAnswer} onChange={(e) => setKanjiAnswer(e.target.value)} />
                    <P>Onyomi: </P>
                    <Input value={onyomiAnswer} onChange={(e) => setOnyomiAnswer(e.target.value)} />
                    <P>Kunyomi: </P>
                    <Input value={kunyomiAnswer} onChange={(e) => setKunyomiAnswer(e.target.value)} />
                </InputField>
            }
            buttonText="Confirmar"
            buttonFunction={verificarResposta}
        />
    );
};

export default Test2Page;