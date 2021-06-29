import { React, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
    CreationBox, Content, Field, P,
} from './Style';
import PageHeader from '../../Components/PageHeader';
import { addNewKanji } from '../../Services/Axios/kanjiServices';

const AddKanjiPage = () => {
    const history = useHistory();
    const [kanji, setKanji] = useState('');
    const [onyomiReading, setOnyomiReading] = useState('');
    const [kunyomiReading, setKunyomiReading] = useState('');
    const [kanjiMeaning, setKanjiMeaning] = useState('');

    const cadastrarKanji = async () => {
        if (kanji === '' || kanjiMeaning === '') {
            alert('Campo vazio.');
        } else {
            // cadastro
            await addNewKanji(kanji, onyomiReading.toLowerCase(), kunyomiReading.toLowerCase(), kanjiMeaning.toLowerCase());
            setKanji('');
            setOnyomiReading('');
            setKunyomiReading('');
            setKanjiMeaning('');
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
                        <input value={kanji} onChange={(e) => setKanji(e.target.value)} />
                    </Field>
                    <Field>
                        <P>Leitura Onyomi: </P>
                        <input value={onyomiReading} onChange={(e) => setOnyomiReading(e.target.value)} />
                    </Field>
                    <Field>
                        <P>Leitura Kunyomi: </P>
                        <input value={kunyomiReading} onChange={(e) => setKunyomiReading(e.target.value)} />
                    </Field>
                    <Field>
                        <P>Significados: </P>
                        <input value={kanjiMeaning} onChange={(e) => setKanjiMeaning(e.target.value)} />
                    </Field>
                    
                    <button onClick={cadastrarKanji} >Cadastrar</button>
                </Content>
            </CreationBox>
        </>
    )
}

export default AddKanjiPage;