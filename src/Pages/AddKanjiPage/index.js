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
    const [radicals, setRadicals] = useState([]); // radicais no formato original
    const [selectedRadicals, setSelectedRadicals] = useState([]); // radicais selecionados
    const [formatedRadicals, setFormatedRadicals] = useState([]); // radicais formatados
    const [selectedRadicalsIndex, setSelectedRadicalsIndex] = useState([]); // index dos radicais escolhidos
    // onyomi
    const [listaOnyomi, setListaOnyomi] = useState('');
    //kunyomi
    const [kunyomiInputs, setKunyomiInputs] = useState([]);
    const [listaKunyomi, setListaKunyomi] = useState([]);
    
    const gerarInputs = () => {
        listaKunyomi.push({
            reading: "",
            meaning: ""
        });
        setKunyomiInputs([...kunyomiInputs,
            <KanjiField key={kunyomiInputs.length}>
                <P>Leitura:</P>
                <Input onChange={(e) => listaKunyomi[listaKunyomi.length - 1].reading = e.target.value} />
                <P>Significado: </P>
                <Input onChange={(e) => listaKunyomi[listaKunyomi.length - 1].meaning = e.target.value} />
            </KanjiField>
        ]);
    };

    const removerRadical = () => {
        if (kunyomiInputs.length >= 0) {
            setKunyomiInputs(kunyomiInputs.slice(0, kunyomiInputs.length - 1));
            setListaKunyomi(listaKunyomi.slice(0, listaKunyomi.length - 1));
        }
    };

    const getRadicalsListFromAPI = async () => {
        const response = await getRadicalsList().then((response) => response.data);
        setFormatedRadicals(response.map((r, idx) => {
            return (
                { 
                    radical: `${r.shape} - ${r.meaning} (${r.strokeCount})`,
                    index: idx
                }
            );
        }));
        setRadicals(response);
    }

    const registrarKanji = async () => {
        selectedRadicalsIndex.map((ind) => {
            selectedRadicals.push(radicals[ind]);
            return undefined;
        })
        if (await addNewKanji(kanji, kanjiMeaning.normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(',').map((word) => word.trim()), selectedRadicals, listaOnyomi.split(',').map((word) => word.trim()), listaKunyomi)) {
            setKanji('');
            setKunyomiInputs([]);
            setKanjiMeaning('');
            setListaOnyomi('');
        }
        setSelectedRadicals([]);
        setSelectedRadicalsIndex([]);
    };

    useEffect(() => {
        getRadicalsListFromAPI();
    }, []);

    return (
        <QuestionBox
            title = "Cadastrar kanji"
            children = {
                <div style={{ width: '100%' }}>
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
                            options={formatedRadicals}
                            displayValue="radical"
                            onSelect={(val) => selectedRadicalsIndex.push(val[val.length - 1].index)}
                            onRemove={(_, removedValue) => selectedRadicalsIndex.splice(removedValue.index, 1)}
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
                        {kunyomiInputs.map((r, idx) => r)}
                    </InputField>
                </div>
            }        
            buttonFunction={registrarKanji}
            buttonText="Cadastrar"
        />
    );
}

export default AddKanjiPage;