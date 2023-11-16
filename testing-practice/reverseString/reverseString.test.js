const reverseString = require('./reverseString');

describe('reverseString()', () => {
    test('returns same for single char input', () => {
        expect(reverseString('a')).toBe('a');
    });
    test('expects string as input', () => {
        expect(reverseString(123)).toBe('please enter a string!');
    });
    test('returns string as reversed', () => {
        expect(reverseString('apple')).toBe('elppa');
    });
});