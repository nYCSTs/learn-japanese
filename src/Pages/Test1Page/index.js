import { React, useEffect, useState } from 'react';
import PageHeader from '../../Components/PageHeader';
import { getKanjisList } from '../../Services/Axios/kanjiServices';
import {
    Test, KanjiDiv, Answer, Field,
} from './Style';
import {
    P, 
} from '../AddKanjiPage/Style';

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
        // resposta correta
        if (onyomiReadingAnswer.includes(onyomiReading.toLowerCase()) && kunyomiReadingAnswer.includes(kunyomiReading.toLowerCase()) && kanjiMeaningAnswer.includes(kanjiMeaning.toLowerCase())) {
            kanjis[kanjis.length - 1] = kanjis.shift();
            alert("Resposta correta!");
        } else {
            alert("Resposta errada :(");
            kanjis.splice(kanjis.length / 2, 0, kanjis.shift());
        }
        setOnyomiReading('');
        setKunyomiReading('');
        setKanjiMeaning('');
        gerarPergunta();
    };
    
    const gerarPergunta = () => {
        setKanji(kanjis[0]?.kanji);
        setOnyomiReadingAnswer(kanjis[0]?.onyomiReading);
        setKunyomiReadingAnswer(kanjis[0]?.kunyomiReading);
        setKanjiMeaningAnswer(kanjis[0]?.meaning);
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
                <KanjiDiv>
                    {kanji}
                </KanjiDiv>
                <Answer>
                    <Field>
                        <P>Leitura Onyomi: </P>
                        <input value={onyomiReading} onChange={(e => setOnyomiReading(e.target.value))} />
                    </Field>
                    <Field>
                        <P>Leitura Kunyomi: </P>
                        <input value={kunyomiReading} onChange={(e) => setKunyomiReading(e.target.value)} />
                    </Field>
                    <Field>
                        <P>Significado: </P>
                        <input value={kanjiMeaning} onChange={(e) => setKanjiMeaning(e.target.value)} />
                    </Field>
                </Answer>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button onClick={verificarResposta}>Confirmar</button>
                </div>
            </Test>
        </>
    )
}

export default Test1Page;