import { React, useEffect, useState } from 'react';
import PageHeader from '../../Components/PageHeader';
import {
    Test, KanjiDiv, Answer, Field,
} from './Style';
import {
    P, 
} from '../AddKanjiPage/Style';

const Test1Page = () => {
    // Resposta do usuario
    const [onyomiReadingAnswer, setOnyomiReadingAnswer] = useState('');
    const [kunyomiReadingAnswer, setKunyomiReadingAnswer] = useState('');
    const [kanjiMeaningAnswer, setKanjiMeaningAnswer] = useState('');
    // Resposta
    const [kanji, setKanji] = useState('称');
    const [onyomiReading, setOnyomiReading] = useState('');
    const [kunyomiReading, setKunyomiReading] = useState('');
    const [kanjiMeaning, setKanjiMeaning] = useState('');

    const verificarResposta = () => {
        // resposta correta
        if (onyomiReadingAnswer === onyomiReading && kunyomiReadingAnswer === kunyomiReading && kanjiMeaningAnswer === kanjiMeaning) {
            alert("Resposta correta!");
        } else {
            alert("Resposta errada :(");
        }
        gerarPergunta();
    };

    const gerarPergunta = () => {
        // requisicao
        // armazena nos set's
    }

    useEffect(() => {
        gerarPergunta();
    }, []);

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
                        <input onChange={(e => setOnyomiReadingAnswer(e.target.value))} />
                    </Field>
                    <Field>
                        <P>Leitura Kunyomi: </P>
                        <input onChange={(e) => setKunyomiReadingAnswer(e.target.value)} />
                    </Field>
                    <Field>
                        <P>Significado: </P>
                        <input onChange={(e) => setKanjiMeaningAnswer(e.target.value)} />
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