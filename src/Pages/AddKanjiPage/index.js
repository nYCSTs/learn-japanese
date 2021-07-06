import { React, useEffect, useState } from 'react';
import { 
    CreationBox, Title, Input, KanjiField, AddButton, 
    RemoveButton, Divisao, Buttons, Field, Hr
} from './Style';
import PageHeader from '../../Components/PageHeader';
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
                    <label for="reading">Leitura:</label>
                    <Input name="reading" onChange={(e) => listaKunyomi[listaKunyomi.length - 1].reading = e.target.value} />
                    <label for="meaning">Significado: </label>
                    <Input name="meaning" onChange={(e) => listaKunyomi[listaKunyomi.length - 1].meaning = e.target.value} />
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
            setSelectedRadicals([]);
            setKanji('');
            setKunyomiInputs([]);
            setKanjiMeaning('');
            setListaOnyomi('');
        }
    };

    useEffect(() => {
        getRadicalsListFromAPI();
        gerarInputs();
    }, []);

    return (
        <>
            <PageHeader />
            <CreationBox>
                <Title>Adicionar kanjis</Title>
                <div style={{ padding: '0 18px', height: "600px", overflow: 'auto' }}>

                    <Field>
                        <Divisao>Kanji</Divisao>
                        <div>
                            <KanjiField>
                                <label for="kanji">Kanji:</label>
                                <Input name="kanji" value={kanji} onChange={(e) => setKanji(e.target.value)}/>
                                <label for="kanjiMeaning">Significado:</label>
                                <Input name="kanjiMeaning" value={kanjiMeaning} onChange={(e) => setKanjiMeaning(e.target.value)}/>
                            </KanjiField>
                        </div>
                    </Field>

                    <Field>
                        <Divisao>Radicais</Divisao>
                        <Multiselect 
                            options={radicals}
                            displayValue="shape"
                            onSelect={setSelectedRadicals}
                            onRemove={setSelectedRadicals}
                            showArrow={true}
                            showCheckbox={true}
                            placeholder="Radicais que compõem o kanji"
                            emptyRecordMsg="Nenhum radical disponivel"
                        />
                    </Field>

                    <Field>
                        <Divisao>Onyomi</Divisao>
                        <div>
                            <label for="onyomi">Leituras Onyomi: </label>
                            <input name="onyomi" value={listaOnyomi} onChange={(e) => setListaOnyomi(e.target.value)} style={{ width: "100%" }} />
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