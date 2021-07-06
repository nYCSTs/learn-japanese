import { APIKanjis } from './baseService/index';

// Kanjis

export const getKanjisList = async () => {
    try {
        const response = await APIKanjis.get('/kanji/');
        return response;
    } catch (err) {
        return err;
    }
};

export const addNewKanji = async (kanji, kanjiMeaning, radicals, onyomi, kunyomi) => {
    console.log(radicals);
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
        console.error(err);
        return false;
    }
};

// Radicais

export const getRadicalsList = async () => {
    try {
        const response = await APIKanjis.get('/radicals');
        return response;
    } catch (err) {
        return err;
    }
}

export const addNewRadical = async (shape, meaning) => {
    try {
        const response = await APIKanjis.post('radicals/add', {
            shape,
            meaning
        });
        if (response.data.err === 'duplicated') {
            alert('Radical ja cadastrado');
        } 
        return true;
    } catch (err) {
        console.error(err);
        return false;
    }

}