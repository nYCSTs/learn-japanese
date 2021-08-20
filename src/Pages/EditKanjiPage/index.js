import { useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router";
import KanjiForm from "../../Components/KanjiForm";
import { getKanjiByID, updateKanji, getRadicalsList } from '../../Services/Axios/kanjiServices';
import { 
    KanjiField,
} from '../../Components/KanjiForm/Style';
import {
    P, Input,
} from '../../Constants/testStyles';

const EditKanjiPage = () => {
    const { id } = useParams();
    const history = useHistory();

    const [previouslySelectedRadicals, setPreviouslySelectedRadicals] = useState([]);
    const [selectedRadicalsIndex, setSelectedRadicalsIndex] = useState([]);
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

    const atualizarKanji = async () => {
        selectedRadicalsIndex.map((selectedIdx) => {
            selectedRadicals.push(radicals[selectedIdx]);
            return undefined;
        });
        const response = await updateKanji(
            id,
            kanji,
            kanjiMeaning.normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(',').map((word) => word.trim()),
            selectedRadicals, 
            listaOnyomi.split(',').map((word) => word.trim()),
            listaKunyomi
        ).then((response) => response);
        if (response.status === 200) {
            alert("Atualizacao feita com sucesso!");
            history.push('/manage-kanjis')
        } else {
            alert("Ocorreu um erro.");
            console.error(response);
        }
    };

    const fillSelectedList = (radicalsList) => {
        radicalsList.map((r) => r.shape).map((sr) => {
            radicals.some((r, idx) => {
                if (r.shape === sr) {
                    formatedRadicals.splice(idx, 1);        // remove da lista de radicais formatados
                    selectedRadicalsIndex.push(idx);        // index dos radicais selecionados
                    previouslySelectedRadicals.push(r);     // radicais antigos
                    return;
                };
            });
        });
        setPreviouslySelectedRadicals(previouslySelectedRadicals.map((r, idx) => {
            return (
                { 
                    radical: `${r.shape} - ${r.meaning} (${r.strokeCount})`,
                    index: selectedRadicalsIndex[idx]
                }
            );
        }));
    };

    useEffect(async () => {
        if (radicals.length) {
            await getKanjiByID(id)
            .then((response) => {
                setKanji(response.data.kanji);
                setKanjiMeaning(response.data.kanjiMeaning.join(', '));
                setListaOnyomi(response.data.onyomi.join(', '))
                gerarInputs(response.data.kunyomi);
                fillSelectedList(response.data.radicals);
            });
        } 
    }, [radicals]);

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
            selectedRadicals={selectedRadicals}
            listaOnyomi={listaOnyomi}
            setListaOnyomi={setListaOnyomi}
            listaKunyomi={listaKunyomi}
            setListaKunyomi={setListaKunyomi}
            kunyomiInputs={kunyomiInputs}
            setKunyomiInputs={setKunyomiInputs}
            submitFunction={atualizarKanji}
            formatedRadicals={formatedRadicals}
            previouslySelectedRadicals={previouslySelectedRadicals}
            setRadicals={setRadicals}
            setFormatedRadicals={setFormatedRadicals}
        />
    );
};

export default EditKanjiPage;