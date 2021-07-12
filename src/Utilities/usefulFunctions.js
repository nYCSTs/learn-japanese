const generateListWords = (str) => {
    return str.split(',').map((word) => word.trim());
}

const shuffleKanjiList = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const generateTestResults = (user, answer) => {
    const wrong = [];
    const correct = [];

    answer.map((val) => {
        if (user.includes(val)) {
            correct.push(val);
        } else {
            wrong.push(val);
        }
        return null;
    });

    return [correct, wrong];
}

module.exports = {
    generateListWords, shuffleKanjiList, generateTestResults,
};