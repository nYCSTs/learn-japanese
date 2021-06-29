import { APIKanjis } from './baseService/index';

export const getKanjisList = async () => {
    try {
        const response = await APIKanjis.get('/kanji/');
        return response;
    } catch (err) {
        return err;
    }
}

export const addNewKanji = async (kanji, onyomiReading, kunyomiReading, meaning) => {
    try {
        const response = await APIKanjis.post('/kanji/add', {
            kanji,
            onyomiReading,
            kunyomiReading,
            meaning
        });
        if (response.data.err === 'duplicated') {
            alert('Kanji ja cadastrado');
        }
        return response;
    } catch (err) {
        return err;
    }
}