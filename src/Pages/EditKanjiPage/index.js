import { useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router";
import KanjiForm from "../../Components/KanjiForm";
import { getKanjiByID, updateKanji, getRadicalByID, getRadicalsList } from '../../Services/Axios/kanjiServices';
import { 
    KanjiField,
} from '../../Components/KanjiForm/Style';
import {
    P, Input,
} from '../../Constants/testStyles';

const EditKanjiPage = () => {
    const { id } = useParams();
    const history = useHistory();

    const [previouslyRadicalsCount, setPreviouslyRadicalsCount] = useState();
    const [previouslySelectedRadicals, setPreviouslySelectedRadicals] = useState([]);
    const [kanji, setKanji] = useState();
    const [kunyomiInputs, setKunyomiInputs] = useState([]);
    const [kanjiMeaning, setKanjiMeaning] = useState();
    const [listaOnyomi, setListaOnyomi] = useState();
    const [listaKunyomi, setListaKunyomi] = useState([]);
    const [radicals, setRadicals] = useState([]);
    const [formatedRadicals, setFormatedRadicals] = useState([]);
    const [selectedRadicals, setSelectedRadicals] = useState([]);

    const gerarInputs = (kunyomiReadings) => {
        kunyomiReadings.map((k) => {
            listaKunyomi.push({
                reading: k.reading,
                meaning: k.meaning.join(', ')
            });
            const len = kunyomiInputs.length;
            const input = (
                <KanjiField key={kunyomiInputs.length}>
                    <div style={{ display: 'flex' }}>
                        <P>Leitura:</P>
                        <Input defaultValue={k.reading} onChange={(e) => listaKunyomi[len].reading = e.target.value} />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <P>Significado: </P>
                        <Input defaultValue={k.meaning.join(', ')} onChange={(e) => listaKunyomi[len].meaning = e.target.value} />
                    </div>
                </KanjiField>
            );
            kunyomiInputs.push(input);
        });
    };

    const fillRadicals = (radicals) => {
        radicals.map(async (r, idx) => {
            await getRadicalByID(r)
            .then((r) => {
                previouslySelectedRadicals.push({
                    radical: `${r.data.shape} - ${r.data.meaning} (${r.data.strokeCount})`,
                    radicalID: r.data._id,
                })
                setSelectedRadicals([...selectedRadicals, r.data._id])
            });
        }); 
    };

    const updateKanji = async () => {
        const r = await updateKanji(
            id, 
            kanji, 
            kanjiMeaning.normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(',').map((word) => word.trim()),
            selectedRadicals,
            listaOnyomi.split(',').map((word) => word.trim()),
            listaKunyomi
        ).then((r) => r);
        console.log(r);
    }

    useEffect(async() => {
        await getKanjiByID(id)
        .then((r) => {
            setPreviouslyRadicalsCount(r.data.radicals.length);
            setKanji(r.data.kanji);
            setKanjiMeaning(r.data.kanjiMeaning);
            gerarInputs(r.data.kunyomi);
            setListaOnyomi(r.data.onyomi);
            fillRadicals(r.data.radicals);
        });
    }, []);

    return (
        <KanjiForm 
            operationType="Editar"
            kanji={kanji} //ok
            setKanji={setKanji} //ok
            kanjiMeaning={kanjiMeaning}  //ok
            setKanjiMeaning={setKanjiMeaning}  //ok
            radicals={radicals}  //ok
            selectedRadicals={selectedRadicals}
            listaOnyomi={listaOnyomi}
            setListaOnyomi={setListaOnyomi}
            listaKunyomi={listaKunyomi}
            submitFunction={updateKanji}
            setListaKunyomi={setListaKunyomi}
            kunyomiInputs={kunyomiInputs}
            setKunyomiInputs={setKunyomiInputs}
            formatedRadicals={formatedRadicals}
            previouslySelectedRadicals={previouslySelectedRadicals}
            setRadicals={setRadicals}
            setFormatedRadicals={setFormatedRadicals}
            selectedRadicals={selectedRadicals}
            previouslyRadicalsCount={previouslyRadicalsCount}
        />
    );
};

export default EditKanjiPage;