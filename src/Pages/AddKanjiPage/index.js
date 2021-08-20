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
    // const [formatedRadicals, setFormatedRadicals] = useState([]); // radicais formatados
    const [selectedRadicalsIndex, setSelectedRadicalsIndex] = useState([]); // index dos radicais escolhidos
    // onyomi
    const [listaOnyomi, setListaOnyomi] = useState('');
    //kunyomi
    const [kunyomiInputs, setKunyomiInputs] = useState([]);
    const [listaKunyomi, setListaKunyomi] = useState([]);

    const registrarKanji = async () => {
        selectedRadicalsIndex.map((ind) => {
            selectedRadicals.push(radicals[ind]);
            return undefined;
        });
        if (await addNewKanji(kanji, kanjiMeaning.normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(',').map((word) => word.trim()), selectedRadicals, listaOnyomi.split(',').map((word) => word.trim()), listaKunyomi)) {
            setKanji('');           // limpa input do kanji
            setKunyomiInputs([]);   // limpa lista radicais
            setKanjiMeaning('');    // limpa significado kanji
            setListaOnyomi('');     // limpa lista onyomi
            setListaKunyomi([]);    // limpa lista kunyomi
        }
        setSelectedRadicals([]);
        setSelectedRadicalsIndex([]);
    };

    return (
        <KanjiForm 
            operationType="Cadastrar"
            kanji={kanji}
            setKanji={setKanji}
            kanjiMeaning={kanjiMeaning}
            setKanjiMeaning={setKanjiMeaning}
            setRadicals={setRadicals}
            selectedRadicalsIndex={selectedRadicalsIndex}
            listaOnyomi={listaOnyomi}
            setListaOnyomi={setListaOnyomi}
            listaKunyomi={listaKunyomi}
            setListaKunyomi={setListaKunyomi}
            kunyomiInputs={kunyomiInputs}
            setKunyomiInputs={setKunyomiInputs}
            submitFunction={registrarKanji}
            selectedRadicals={[]}
        />
    );
}

export default AddKanjiPage;