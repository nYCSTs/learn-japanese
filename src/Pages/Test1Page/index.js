import { useEffect, useState } from 'react';
import { generateTestResults } from '../../Utilities/usefulFunctions';
import { getKanjisList } from '../../Services/Axios/kanjiServices';
import {
    P, Input, InputField,
} from '../../Constants/testStyles';
import QuestionBox from '../../Components/QuestionBox';
import { useProfileUser } from '../../Context/index';
import { addTestCount } from '../../Services/Axios/userServices';

const Test1Page = () => {
    const { user, testCount, setTestCount } = useProfileUser();
    const [kanji, setKanji] = useState(''); // Kanji da questao
    const [kanjis, setKanjis] = useState([]); // Lista de kanjis
    // Resposta
    const [onyomiReadingAnswer, setOnyomiReadingAnswer] = useState([]); // Leitura onyomi       - Resposta
    const [kunyomiReadingAnswer, setKunyomiReadingAnswer] = useState([]); // Leitura kunyomi    - Resposta
    const [kanjiMeaningAnswer, setKanjiMeaningAnswer] = useState([]); // Significado do kanji   - Resposta
    // Resposta do usuario
    const [onyomiReading, setOnyomiReading] = useState(''); // Leitura onyomi                   - Usuario
    const [kunyomiReading, setKunyomiReading] = useState(''); // Leitura kunyomi                - Usuario
    const [kanjiMeaning, setKanjiMeaning] = useState(''); // Significado do kanji               - Usuario

    const getKanjisListFromAPI = async () => {
        await getKanjisList()
        .then((response) => setKanjis(response.data));
    }

    const verificarResposta = async () => {
        const [onyomiCorrect, onyomiWrong] = generateTestResults(onyomiReading, onyomiReadingAnswer);
        const [kunyomiCorrect, kunyomiWrong] = generateTestResults(kunyomiReading, kunyomiReadingAnswer);

        if (!onyomiWrong.length && !kunyomiWrong.length && kanjiMeaningAnswer.includes(kanjiMeaning)) {
            kanjis.push(kanjis.shift());
            alert("Completamente correta!");
        } else {
            if (onyomiCorrect.length && kunyomiCorrect.length && kanjiMeaningAnswer.includes(kanjiMeaning)) {
                alert("Correta");
            } else {
                alert("Errada");
                
            };
            alert(`Onyomi: ${onyomiReadingAnswer.join(', ')}\nKunyomi: ${kunyomiReadingAnswer.join(', ')}\nSignificado: ${kanjiMeaningAnswer.join(', ')}`)
            kanjis.splice(kanjis.length / 2, 0, kanjis.shift());
        };


        setTestCount(testCount + 1);
        await addTestCount(user._id, testCount);
        
        setOnyomiReading('');
        setKunyomiReading('');
        setKanjiMeaning('');
        gerarPergunta();
    };

    const gerarPergunta = () => {
        setKanji(kanjis[0]?.kanji);
        setOnyomiReadingAnswer(kanjis[0]?.onyomi);
        setKunyomiReadingAnswer(kanjis[0]?.kunyomi.map((v) => v.reading));
        setKanjiMeaningAnswer(kanjis[0]?.kanjiMeaning);
    }
    
    useEffect(() => {
        getKanjisListFromAPI();
    }, []);

    useEffect(() => {
        gerarPergunta();
    }, [kanjis]);

    return (
        <QuestionBox 
            title={kanji}
            kanji={kanji}
            children={
                <>
                    <InputField>
                        <P>Leitura Onyomi: </P>
                        <Input value={onyomiReading} onChange={(e => setOnyomiReading(e.target.value))} />
                    </InputField>
                    <InputField>
                        <P>Leitura Kunyomi: </P>
                        <Input value={kunyomiReading} onChange={(e) => setKunyomiReading(e.target.value)} />
                    </InputField>
                    <InputField>
                        <P>Significado: </P>
                        <Input value={kanjiMeaning} onChange={(e) => setKanjiMeaning(e.target.value)} />
                    </InputField>
                </>
            }
            buttonFunction={verificarResposta}
            buttonText="Confirmar"
        />
    )
}

export default Test1Page;