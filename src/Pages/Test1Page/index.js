import { React, useEffect, useState } from 'react';
import PageHeader from '../../Components/PageHeader';
import { generateTestResults } from '../../Utilities/usefulFunctions';
import { getKanjisList } from '../../Services/Axios/kanjiServices';
import {
    Test, Question, Answer, Field, Submit, Input, Button, P
} from './Style';

const Test1Page = () => {
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
            }
            kanjis.splice(kanjis.length / 2, 0, kanjis.shift());
            alert(`Leitura onyomi:\n${onyomiReadingAnswer}\n\nLeitura kunyomi:\n${kunyomiReadingAnswer}\n\nSignificado:\n${kanjiMeaningAnswer}`);
        }
    
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
        <>
            <PageHeader />
            <Test>
                <Question>
                    {kanji}
                </Question>
                <Answer>
                    <Field>
                        <P>Leitura Onyomi: </P>
                        <Input value={onyomiReading} onChange={(e => setOnyomiReading(e.target.value))} />
                    </Field>
                    <Field>
                        <P>Leitura Kunyomi: </P>
                        <Input value={kunyomiReading} onChange={(e) => setKunyomiReading(e.target.value)} />
                    </Field>
                    <Field>
                        <P>Significado: </P>
                        <Input value={kanjiMeaning} onChange={(e) => setKanjiMeaning(e.target.value)} />
                    </Field>
                </Answer>
                <Submit>
                    <Button onClick={verificarResposta}>Responder</Button>
                </Submit>
            </Test>
        </>
    )
}

export default Test1Page;