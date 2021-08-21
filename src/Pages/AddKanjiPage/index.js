import { React, useState } from 'react';
import { addNewKanji } from '../../Services/Axios/kanjiServices';
import KanjiForm from '../../Components/KanjiForm';

const AddKanjiPage = () => {
    // kanjis
    const [kanji, setKanji] = useState('');
    const [kanjiMeaning, setKanjiMeaning] = useState('');
    // radicais
    const [radicals, setRadicals] = useState([]); // radicais no formato original
    const [selectedRadicals, setSelectedRadicals] = useState([]); // radicais selecionados
    const [formatedRadicals, setFormatedRadicals] = useState([]); // radicais formatados
    // onyomi
    const [listaOnyomi, setListaOnyomi] = useState('');
    //kunyomi
    const [kunyomiInputs, setKunyomiInputs] = useState([]);
    const [listaKunyomi, setListaKunyomi] = useState([]);

    const registrarKanji = async () => {
        const r = await addNewKanji(
            kanji,
            kanjiMeaning.normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(',').map((word) => word.trim()),
            selectedRadicals,
            listaOnyomi.split(',').map((word) => word.trim()),
            listaKunyomi
        ).then((r) => r);

        if (r.status === 200) {
            setKanji('');           // limpa input do kanji
            setKunyomiInputs([]);   // limpa lista radicais
            setKanjiMeaning('');    // limpa significado kanji
            setListaOnyomi('');     // limpa lista onyomi
            setListaKunyomi([]);    // limpa lista kunyomi
        }
        setSelectedRadicals([]);
    };

    return (
        <KanjiForm 
            operationType="Cadastrar"
            kanji={kanji}
            setKanji={setKanji}
            kanjiMeaning={kanjiMeaning}
            setKanjiMeaning={setKanjiMeaning}
            formatedRadicals={formatedRadicals}
            selectedRadicals={selectedRadicals}
            listaOnyomi={listaOnyomi}
            setListaOnyomi={setListaOnyomi}
            listaKunyomi={listaKunyomi}
            setListaKunyomi={setListaKunyomi}
            kunyomiInputs={kunyomiInputs}
            setKunyomiInputs={setKunyomiInputs}
            submitFunction={registrarKanji}
            previouslySelectedRadicals={[]}
            setRadicals={setRadicals}
            setFormatedRadicals={setFormatedRadicals}
            previouslyRadicalsCount={0}
        />
    );
}

export default AddKanjiPage;