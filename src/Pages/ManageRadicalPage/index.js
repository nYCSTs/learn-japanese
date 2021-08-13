import { useState, useEffect } from 'react';
import ListPages from '../../Components/ListPages';
import { getRadicalsList, deleteRadical } from '../../Services/Axios/kanjiServices';

const ManageRadicalPage = () => {
    const [radicalsList, setRadicalsList] = useState([]);

    const getRadicalsFromAPI = async () => {
        await getRadicalsList()
        .then((response) => setRadicalsList(response.data));
    };

    useEffect(() => {
        getRadicalsFromAPI();
    }, []);

    return (
        <ListPages 
            title="Gerenciar Radicais"
            type="radical"
            valuesList={radicalsList}
            refreshFunction={getRadicalsFromAPI}
            deleteFunction={deleteRadical}
        />
    )
};

export default ManageRadicalPage;