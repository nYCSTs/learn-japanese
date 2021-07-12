import { React, useEffect, useState } from 'react';
import { 
    KanjiField, AddButton, RemoveButton, Divisao, Buttons, Hr
} from './Style';
import {
    Input, InputField, P,
} from '../../Constants/testStyles';
import QuestionBox from '../../Components/QuestionBox';
import { addNewKanji, getRadicalsList } from '../../Services/Axios/kanjiServices';
import Multiselect from 'multiselect-react-dropdown';


const AddKanjiPage = () => {
    // kanjis
    const [kanji, setKanji] = useState('');
    const [kanjiMeaning, setKanjiMeaning] = useState('');
    // radicais
    const [radicals, setRadicals] = useState([]);
    const [selectedRadicals, setSelectedRadicals] = useState([]);
    // onyomi
    const [listaOnyomi, setListaOnyomi] = useState('');
    //kunyomi
    const [kunyomiInputs, setKunyomiInputs] = useState([]);
    const [listaKunyomi, setListaKunyomi] = useState([]);
    
    const gerarInputs = () => {
        listaKunyomi.push({
            reading: "",
            meaning: "",
        });
        setKunyomiInputs([...kunyomiInputs,
            <div>
                <KanjiField>
                    <P>Leitura:</P>
                    <Input onChange={(e) => listaKunyomi[listaKunyomi.length - 1].reading = e.target.value} />
                    <P>Significado: </P>
                    <Input onChange={(e) => listaKunyomi[listaKunyomi.length - 1].meaning = e.target.value} />
                </KanjiField>
                <Hr />
            </div> 
        ]);
    };

    const removerRadical = () => {
        if (kunyomiInputs.length > 1) {
            setKunyomiInputs(kunyomiInputs.slice(0, kunyomiInputs.length - 1));
            setListaKunyomi(listaKunyomi.slice(0, listaKunyomi.length - 1));
        }
    };

    const getRadicalsListFromAPI = async () => {
        await getRadicalsList()
        .then((response) => setRadicals(response.data));
    }

    const registrarKanji = async () => {
        if (await addNewKanji(kanji, kanjiMeaning.normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(',').map((word) => word.trim()), selectedRadicals, listaOnyomi.split(',').map((word) => word.trim()), listaKunyomi)) {
            setKanji('');
            setKunyomiInputs([]);
            setKanjiMeaning('');
            setListaOnyomi('');
            setSelectedRadicals(selectedRadicals[0]);
        }
    };

    useEffect(() => {
        getRadicalsListFromAPI();
        gerarInputs();
    }, []);

    return (
        <QuestionBox
            titleText = "Cadastrar kanji"
            children = {
                <div style={{ width: '100%', overflow: 'auto', maxHeight: '520px' }}>
                    <InputField>
                        <Divisao>Kanji</Divisao>
                        <KanjiField>
                            <P>Kanji:</P>
                            <Input value={kanji} onChange={(e) => setKanji(e.target.value)}/>
                            <P>Significado:</P>
                            <Input value={kanjiMeaning} onChange={(e) => setKanjiMeaning(e.target.value)}/>
                        </KanjiField>
                    </InputField>

                    <InputField>
                        <Divisao>Radicais</Divisao>
                        <Multiselect 
                            options={radicals}
                            displayValue="shape"
                            onSelect={setSelectedRadicals}
                            onRemove={setSelectedRadicals}
                            showArrow={true}
                            placeholder=""
                            emptyRecordMsg=""
                            style={{
                                searchBox: {
                                    border: '1px solid black',
                                },
                                chips: {
                                    margin: '0',
                                    height: '22px',
                                    borderRadius: '12px',
                                },
                                inputField: {
                                    margin: '0',
                                },
                            }}
                        />
                    </InputField>

                    <InputField>
                        <Divisao>Onyomi</Divisao>
                        <P>Leituras: </P>
                        <Input value={listaOnyomi} onChange={(e) => setListaOnyomi(e.target.value)} />
                    </InputField>

                    <InputField>
                        <Buttons>
                            <Divisao style={{ margin: '0' }}>Kunyomi</Divisao>
                            <div>
                                <AddButton onClick={() => gerarInputs('kunyomi')}>Adicionar+</AddButton>
                                <RemoveButton onClick={() => removerRadical('kunyomi')}>x</RemoveButton>
                            </div>
                        </Buttons>
                        {kunyomiInputs}
                    </InputField>
                </div>
            }        
            answerCheck={registrarKanji}
            buttonText="Cadastrar"
        />
    )
}

export default AddKanjiPage;