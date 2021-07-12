const generateListWords = (str) => {
    return str.split(',').map((word) => word.trim());
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
    generateListWords, generateTestResults,
};