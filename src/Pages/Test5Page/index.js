import { React, useState, useEffect } from 'react';
import { getKanjisList } from '../../Services/Axios/kanjiServices';
import {
    P, QuestionBox
} from './Style';

const Test5Page = () => {
    const [kanjisList, setKanjisList] = useState([]);

    useEffect(() => {
        getKanjisList()
        .then((response) => setKanjisList(response.data));
    }, []);

    return (
        <QuestionBox>
            <P>Significado do Kanji: </P>
            {kanjisList[0]?.kanjiMeaning}
            <P>Onyomi: </P>
            {kanjisList[0]?.onyomi}
            <P>Kunyomi: </P>
            {kanjisList[0]?.kunyomi.map((v) => {
                return (
                    <>
                        <p>Leitura: {v.reading}</p>
                        <p>Significado: {v.meaning}</p>
                    </>
                );
            })}
        </QuestionBox>
    );
};

export default Test5Page;