import KanjiForm from '../../Components/KanjiForm';
import { APIKanjis } from './baseService/index';

// Kanjis

export const getKanjiList = async () => {
    try {
        const response = await APIKanjis.get('/kanji');
        return response;
    } catch (err) {
        return err;
    }
};

export const getShuffledKanjiList = async () => {
    try {
        const response = await APIKanjis.get('/kanji/shuffle');
        return response;
    } catch (err) {
        return err;
    }
};

export const getKanjiByID = async (id) => {
    try {
        const response = await APIKanjis.get(`/kanji/${id}`);
        return response;
    } catch (err) {
        console.error(err);
        return err;
    }
}

export const addNewKanji = async (kanji, kanjiMeaning, radicals, onyomi, kunyomi) => {
    try {
        const response = await APIKanjis.post('/kanji/add', {
            kanji,
            kanjiMeaning,
            radicals,
            onyomi,
            kunyomi,
        });
        if (response.data.err === 'duplicated') {
            alert('Kanji ja cadastrado');
        }
        return response;
    } catch (err) {
        console.error(err);
        return false;
    }
};

export const updateKanji = async (id, kanji, kanjiMeaning, radicals, onyomi, kunyomi) => {
    try {
        const response = await APIKanjis.put(`/kanji/update/${id}`, {
            kanji, 
            kanjiMeaning, 
            radicals,
            onyomi,
            kunyomi,
        });
        return response;
    } catch (err) {
        console.error(err);
        return err;
    }
}

export const deleteKanji = async (id) => {
    try {
        const response = await APIKanjis.delete(`/kanji/delete/${id}`);
        return response;
    } catch (err) {
        console.error(err);
        return err;
    }
}

// Radicais

export const getRadicalByID = async (id) => {
    try {
        const response = await APIKanjis.get(`/radical/${id}`);
        return response;
    } catch (err) {
        console.error(err);
        return err;
    }
}

export const getRadicalsList = async () => {
    try {
        const response = await APIKanjis.get('/radicals');
        return response;
    } catch (err) {
        return err;
    }
};

export const addNewRadical = async (shape, meaning, strokeCount) => {
    try {
        const response = await APIKanjis.post('radicals/add', {
            shape,
            meaning,
            strokeCount
        });
        if (response.data.err === 'duplicated') {
            alert(`O radical ${shape} ja esta cadastrado`);
        } 
        return true;
    } catch (err) {
        console.error(err);
        return false;
    }
};

export const updateRadical = async (id, shape, meaning, strokeCount) => {
    try {
        const response = await APIKanjis.put(`/radicals/update/${id}`, {
            shape,
            meaning,
            strokeCount,
        })
        return response;
    } catch (err) {
        console.error(err);
        return err;
    }
}

export const deleteRadical = async (id) => {
    try {
        const response = await APIKanjis.delete(`/radicals/delete/${id}`);
        return response;
    } catch (err) {
        console.error(err);
        return false;
    }
};