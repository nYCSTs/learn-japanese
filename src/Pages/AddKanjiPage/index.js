import { React, useEffect, useState } from 'react';
import { 
    CreationBox, Title, Input, KanjiField, AddButton, 
    RemoveButton, Divisao, Buttons, Field
} from './Style';
import PageHeader from '../../Components/PageHeader';
import { addNewKanji } from '../../Services/Axios/kanjiServices';


const AddKanjiPage = () => {
    // kanjis
    const [kanji, setKanji] = useState('');
    const [kanjiMeaning, setKanjiMeaning] = useState('');
    // radicais
    const [radicalsInputs, setRadicalsInputs] = useState([]);
    const [listaRadicais, setListaRadicais] = useState([]);
    // onyomi
    const [listaOnyomi, setListaOnyomi] = useState('');
    //kunyomi
    const [kunyomiInputs, setKunyomiInputs] = useState([]);
    const [listaKunyomi, setListaKunyomi] = useState([]);
    
    const gerarInputs = (tipo) => {
        if (tipo === 'radical') {
            listaRadicais.push({
                shape: "",
                meaning: "",
            });
            setRadicalsInputs([...radicalsInputs, 
                <div style={{ display: 'flex' }}>
                    <KanjiField>
                        <p>Forma: </p>
                        <Input onChange={(e) => listaRadicais[listaRadicais.length - 1].shape = e.target.value} />
                    </KanjiField>
                    <KanjiField>
                        <p>Significado: </p>
                        <Input onChange={(e) => listaRadicais[listaRadicais.length - 1].meaning = e.target.value}/>
                    </KanjiField>
                </div>
            ]);
        } else {
            listaKunyomi.push({
                reading: "",
                meaning: "",
            });
            setKunyomiInputs([...kunyomiInputs,
                <div style={{ display: 'flex' }}>
                    <KanjiField>
                        <p>Leitura: </p>
                        <Input onChange={(e) => listaKunyomi[listaKunyomi.length - 1].reading = e.target.value} />
                    </KanjiField>
                    <KanjiField>
                        <p>Significado: </p>
                        <Input onChange={(e) => listaKunyomi[listaKunyomi.length - 1].meaning = e.target.value} />
                    </KanjiField>
                </div> 
            ]);
        }
    };

    const removerRadical = (tipo) => {
        if (tipo === 'radical') {
            if (radicalsInputs.length > 1) {
                setRadicalsInputs(radicalsInputs.slice(0, radicalsInputs.length - 1));
                setListaRadicais(listaRadicais.slice(0, listaRadicais.length - 1))
            }
        } else {
            if (kunyomiInputs.length > 1) {
                setKunyomiInputs(kunyomiInputs.slice(0, kunyomiInputs.length - 1));
                setListaKunyomi(listaKunyomi.slice(0, listaKunyomi.length - 1));
            }
        }
    };

    const registrarKanji = async () => {
        if (await addNewKanji(kanji, kanjiMeaning.split(',').map((word) => word.trim()), listaRadicais, listaOnyomi.split(',').map((word) => word.trim()), listaKunyomi)) {
            setKanji('');
            setKanjiMeaning('');
            setRadicalsInputs([]);
            setKunyomiInputs([]);
            setListaOnyomi('');
            gerarInputs('radical');
            gerarInputs('kunyomi');
        }
    };

    useEffect(() => {
        gerarInputs('radical');
        gerarInputs('kunyomi');
    }, []);

    return (
        <>
            <PageHeader />
            <CreationBox>
                <Title>Adicionar kanjis</Title>
                <div style={{ padding: '0 18px', height: "600px", overflow: 'auto' }}>

                    <Field>
                        <Divisao>Kanji</Divisao>
                        <div style={{ display: 'flex' }}>
                            <KanjiField>
                                <p>Kanji: </p>
                                <Input value={kanji} onChange={(e) => setKanji(e.target.value)}/>
                            </KanjiField>
                            <KanjiField>
                                <p>Significados: </p>
                                <Input value={kanjiMeaning} onChange={(e) => setKanjiMeaning(e.target.value)}/>
                            </KanjiField>
                        </div>
                    </Field>

                    <Field>
                        <Buttons>
                            <Divisao>Radicais</Divisao>
                            <AddButton onClick={() => gerarInputs('radical')}>Adicionar+</AddButton>
                            <RemoveButton onClick={() => removerRadical('radical')}>x</RemoveButton>
                        </Buttons>
                        {radicalsInputs}
                    </Field>

                    <Field>
                        <Divisao>Onyomi</Divisao>
                        <div style={{ display: 'flex', alignItems: 'center', margin: "0 12px" }}>
                            <p>Leituras Onyomi: </p>
                            <input value={listaOnyomi} onChange={(e) => setListaOnyomi(e.target.value)} style={{ width: "100%" }} />
                        </div>
                    </Field>

                    <Field>
                        <Buttons>
                            <Divisao>Kunyomi</Divisao>
                            <AddButton onClick={() => gerarInputs('kunyomi')}>Adicionar+</AddButton>
                            <RemoveButton onClick={() => removerRadical('kunyomi')}>x</RemoveButton>
                        </Buttons>
                        {kunyomiInputs}
                    </Field>

                    <button onClick={() => registrarKanji()}>Cadastrar</button>
                </div>
            </CreationBox>
        </>
    )
}

export default AddKanjiPage;