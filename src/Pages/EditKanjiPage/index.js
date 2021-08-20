import { useState, useEffect } from 'react';
import { useParams } from "react-router";
import KanjiForm from "../../Components/KanjiForm";
import { getKanjiByID, updateKanji } from '../../Services/Axios/kanjiServices';
import { 
    KanjiField,
} from '../../Components/KanjiForm/Style';
import {
    P, Input,
} from '../../Constants/testStyles';

const EditKanjiPage = () => {
    const { id } = useParams();
    const [kanji, setKanji] = useState();
    const [kunyomiInputs, setKunyomiInputs] = useState([]);
    const [kanjiMeaning, setKanjiMeaning] = useState();
    const [listaOnyomi, setListaOnyomi] = useState();
    const [listaKunyomi, setListaKunyomi] = useState([]);
    const [radicals, setRadicals] = useState([]);
    const [selectedRadicalsIndex, setSelectedRadicalsIndex] = useState([]);

    const gerarInputs = (kunyomiReadings) => {
        kunyomiReadings.map((k) => {
            listaKunyomi.push({
                reading: k.reading,
                meaning: k.meaning.join(', ')
            });
            const input = (
                <KanjiField key={kunyomiInputs.length}>
                    <div style={{ display: 'flex' }}>
                        <P>Leitura:</P>
                        <Input defaultValue={k.reading} onChange={(e) => listaKunyomi[kunyomiInputs.length].reading = e.target.value} />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <P>Significado: </P>
                        <Input defaultValue={k.meaning.join(', ')} onChange={(e) => listaKunyomi[kunyomiInputs.length].meaning = e.target.value} />
                    </div>
                </KanjiField>
            );
            setKunyomiInputs([...kunyomiInputs, input]);
        });
    };

    const atualizarKanji = async () => {
        await updateKanji(
            id,
            kanji,
            kanjiMeaning.normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(',').map((word) => word.trim()),
            [], 
            listaOnyomi.split(',').map((word) => word.trim()),
            listaKunyomi
        ).then((response) => console.log(response));
    }

    useEffect(async () => {
        await getKanjiByID(id)
        .then((response) => {
            setKanji(response.data.kanji);
            setKanjiMeaning(response.data.kanjiMeaning.join(', '));
            setListaOnyomi(response.data.onyomi.join(', '))
            gerarInputs(response.data.kunyomi);
        });
    }, []);

    return (
        <KanjiForm 
            operationType="Editar"
            kanji={kanji}
            setKanji={setKanji}
            kanjiMeaning={kanjiMeaning}
            setKanjiMeaning={setKanjiMeaning}
            radicals={radicals}
            setRadicals={setRadicals}
            selectedRadicalsIndex={selectedRadicalsIndex}
            selectedRadicals={[]}
            listaOnyomi={listaOnyomi}
            setListaOnyomi={setListaOnyomi}
            listaKunyomi={listaKunyomi}
            setListaKunyomi={setListaKunyomi}
            kunyomiInputs={kunyomiInputs}
            setKunyomiInputs={setKunyomiInputs}
            submitFunction={atualizarKanji}
        />
    );
};

export default EditKanjiPage;

/* 
{
    "kanjiMeaning": [
        "escuridao",
        "desaparecer",
        "sombra",
        "informal",
        "escurecer"
    ],
    "onyomi": [
        "an"
    ],
    "_id": "610c23e49cb08800a935d545",
    "kanji": "暗",
    "radicals": [
        {
            "_id": "610bfdfc9cb08800a935d430",
            "shape": "日",
            "meaning": "sol, dia"
        },
        {
            "_id": "610bffe89cb08800a935d454",
            "shape": "立",
            "meaning": "vaso"
        },
        {
            "_id": "610bfdfc9cb08800a935d430",
            "shape": "日",
            "meaning": "sol, dia"
        },
        {
            "_id": "610bffe89cb08800a935d454",
            "shape": "立",
            "meaning": "vaso"
        }
    ],
    "kunyomi": [
        {
            "meaning": [
                "sombrio"
            ],
            "_id": "610c23e49cb08800a935d54a",
            "reading": "kura-i"
        }
    ],
    "__v": 0
}
*/