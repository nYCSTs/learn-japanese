import { React, useEffect, useState } from 'react';
import { 
    KanjiField, AddButton, RemoveButton, Divisao, Buttons,
} from './Style';
import {
    InputField, P, Input,
} from '../../Constants/testStyles';
import QuestionBox from '../../Components/QuestionBox';
import Multiselect from 'multiselect-react-dropdown';
import { getRadicalsList } from '../../Services/Axios/kanjiServices';

const KanjiForm = ({ 
    kanji, setKanji, kanjiMeaning, setKanjiMeaning, selectedRadicalsIndex, 
    listaOnyomi, setListaOnyomi, kunyomiInputs, setKunyomiInputs,
    submitFunction, operationType,  selectedRadicals, setRadicals, listaKunyomi, setListaKunyomi,
}) => {
    const [formatedRadicals, setFormatedRadicals] = useState();

    const gerarInput = () => {
        listaKunyomi.push({
            reading: "",
            meaning: ""
        });

        const input = (
            <KanjiField key={kunyomiInputs.length}>
                <div style={{ display: 'flex' }}>
                    <P>Leitura:</P>
                    <Input onChange={(e) => listaKunyomi[kunyomiInputs.length].reading = e.target.value} />
                </div>
                <div style={{ display: 'flex' }}>
                    <P>Significado: </P>
                    <Input onChange={(e) => listaKunyomi[kunyomiInputs.length].meaning = e.target.value} />
                </div>
            </KanjiField>
        );

        setKunyomiInputs([...kunyomiInputs, input]);
    };

    const removerInput = () => {
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

    useEffect(() => {
        getRadicalsListFromAPI();
    }, []);

    return (
        <QuestionBox
            title = {`${operationType} Kanji`} 
            children = {
                <div style={{ width: '100%' }}>
                    <InputField>
                        <Divisao>Kanji</Divisao>
                        <KanjiField>
                            <div style={{ display: 'flex' }}>
                                <P>Kanji:</P>
                                <Input value={kanji} onChange={(e) => setKanji(e.target.value)}/>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <P>Significado:</P>
                                <Input value={kanjiMeaning} onChange={(e) => setKanjiMeaning(e.target.value)}/>
                            </div>
                        </KanjiField>
                    </InputField>

                    <InputField>
                        <Divisao>Radicais</Divisao>
                        <Multiselect 
                            options={formatedRadicals}
                            selectedValues={selectedRadicals}
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
                                    borderRadius: '8px',
                                },
                                inputField: {
                                    margin: '0',
                                },
                            }}
                        />
                    </InputField>

                    <InputField>
                        <Divisao>Onyomi</Divisao>
                        <P>Leituras:</P>
                        <Input value={listaOnyomi} onChange={(e) => setListaOnyomi(e.target.value)} />
                    </InputField>

                    <InputField>
                        <Buttons>
                            <Divisao style={{ margin: '0' }}>Kunyomi</Divisao>
                            <div>
                                <AddButton onClick={() => gerarInput()}>Adicionar+</AddButton>
                                <RemoveButton onClick={() => removerInput()}>x</RemoveButton>
                            </div>
                        </Buttons>
                        {kunyomiInputs.map((r) => r)}
                    </InputField>
                </div>
            }        
            buttonFunction={submitFunction}
            buttonText="Cadastrar"
        />
    );
}

export default KanjiForm;