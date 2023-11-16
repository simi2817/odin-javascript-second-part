const analyzeArray = (array) => {
    
    const minValue = Math.min(...array);
    const maxValue = Math.max(...array);
    const length = array.length;
    const avgValue = Math.round(array.reduce((prev, curr) => prev + curr, 0) / length);
    
    return {
        average: avgValue,
        min: minValue,
        max: maxValue,
        length: length
    };
}

module.exports = analyzeArray;