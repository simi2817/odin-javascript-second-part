const reverseString = (string) => {
    if(typeof string !== 'string')
        return 'please enter a string!';
    return string.split('').reverse().join('');
}

module.exports = reverseString;