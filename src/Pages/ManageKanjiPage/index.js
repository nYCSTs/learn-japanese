import { useState, useEffect } from 'react';
import ListPages from '../../Components/ListPages';
import { getKanjiList, deleteKanji } from '../../Services/Axios/kanjiServices';

const ManageKanjiPage = () => {
    const [kanjisList, setKanjisList] = useState([]);

    const getKanjiListFromAPI = async () => {
        await getKanjiList()
        .then((response) => setKanjisList(response.data));
    };

    useEffect(() => {
        getKanjiListFromAPI();
    }, []);

    return (
        <ListPages 
            title="Gerenciar Kanjis"
            type="kanji"
            valuesList={kanjisList}
            refreshFunction={getKanjiListFromAPI}
            deleteFunction={deleteKanji}
        />
    )
};

export default ManageKanjiPage;