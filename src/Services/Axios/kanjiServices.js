import { APIKanjis } from './baseService/index';

export const getKanjisList = async () => {
    try {
        const response = await APIKanjis.get('/kanji/');
        return response;
    } catch (err) {
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
        return true;
    } catch (err) {
        return false;
    }
}