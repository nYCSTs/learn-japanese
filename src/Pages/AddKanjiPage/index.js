import { React, useState } from 'react';
import {
    CreationBox, Content, Field, P,
} from './Style';
import PageHeader from '../../Components/PageHeader';

const AddKanjiPage = () => {
    const [kanji, setKanji] = useState('');
    const [onyomiReading, setOnyomiReading] = useState('');
    const [kunyomiReading, setKunyomiReading] = useState('');
    const [kanjiMeaning, setKanjiMeaning] = useState('');

    const cadastrarKanji = () => {
        if (kanji === '' || onyomiReading === '' || kunyomiReading === '' || kanjiMeaning === '') {
            alert('Campo vazio.');
        } else {
            console.log('ok');
            // cadastro
        }
    };

    return (
        <>
            <PageHeader />
            <CreationBox>
                <Content>
                    <h1>Kanji a ser adicionado:</h1>
                    <Field>
                        <P>Figura: </P>
                        <input onChange={(e) => setKanji(e.target.value)} />
                    </Field>
                    <Field>
                        <P>Leitura Onyomi: </P>
                        <input onChange={(e) => setOnyomiReading(e.target.value)} />
                    </Field>
                    <Field>
                        <P>Leitura Kunyomi: </P>
                        <input onChange={(e) => setKunyomiReading(e.target.value)} />
                    </Field>
                    <Field>
                        <P>Significados: </P>
                        <input onChange={(e) => setKanjiMeaning(e.target.value)} />
                    </Field>
                    
                    <button onClick={cadastrarKanji} >Cadastrar</button>
                </Content>
            </CreationBox>
        </>
    )
}

export default AddKanjiPage;