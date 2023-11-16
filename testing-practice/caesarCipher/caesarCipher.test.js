const caesarCipher = require('./caesarCipher');

describe('caesarCipher()', () => {
    test('testing for single char with shift factor as 1', () => {
        expect(caesarCipher('a', 1)).toBe('b');
    });
    test('testing for two char with shift factor as 1', () => {
        expect(caesarCipher('ab', 1)).toBe('bc');
    });
    test('testing for shift factor 2', () => {
        expect(caesarCipher('how are you', 2)).toBe('jqy ctg aqw');
    });
    test('testing for special characters and numbers', () => {
        expect(caesarCipher("Are you visiting St.Mary's Chapel today at 16:00?", 4)).toBe("Evi csy zmwmxmrk Wx.Qevc'w Gletip xshec ex 16:00?");
    });
    test('testing for to keep the same case as input without altering', () => {
        expect(caesarCipher("Oh My GOD!", 8)).toBe("Wp Ug OWL!");
    });
});