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
    
    user.map((userAnswer) => {
        if (answer.indexOf(userAnswer.trim()) !== -1) {
            correct.push(userAnswer);
        } else {
            wrong.push(userAnswer);
        }
        return null;
    });

    return [correct, wrong];
}

module.exports = {
    generateListWords, generateTestResults, shuffleKanjiList,
};