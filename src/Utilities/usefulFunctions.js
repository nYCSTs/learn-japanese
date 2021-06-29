const generateListWords = (str) => {
    return str.split(',').map((word) => word.trim());
}

module.exports = {
    generateListWords
};