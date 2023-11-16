const caesarCipher = (str, shift) => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = lowercase.toUpperCase();

    const lowerCipherAlphabet = lowercase.split('').map((char, index) => {
        const newIndex = (index + shift) % lowercase.length;
        return lowercase[newIndex];
    });

    const upperCipherAlphabet = uppercase.split('').map((char, index) => {
        const newIndex = (index + shift) % uppercase.length;
        return uppercase[newIndex];
    });

    return encipher(str, lowercase, uppercase, lowerCipherAlphabet, upperCipherAlphabet);
}

const encipher = (message, lowercase, uppercase, lowerCipherAlphabet, upperCipherAlphabet) => {
    const specials = /[ 0-9`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~^]/;;
    const enciphered = message.split('').map((char) => {
        if(!checkCase(char)) {
            if(!specials.test(char)) {
                const index = lowercase.indexOf(char);
                return lowerCipherAlphabet[index];
            }
            else
                return char;
        }
        else {
            if(!specials.test(char)) {
                const index = uppercase.indexOf(char);
                return upperCipherAlphabet[index];
            }
            else
                return char;
        }
    }).join('');
    return enciphered;
}

const checkCase = (char) => {
    if(char.toUpperCase() === char)
        return true;
    else
        return false;
}

module.exports = caesarCipher;