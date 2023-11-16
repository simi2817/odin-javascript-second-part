const capitalize = require('./capitalize');

test('return single char as capitalized', () => {
    expect(capitalize('a')).toBe('A');
});

test('expects a string as input', () => {
    expect(capitalize(0)).toBe('please enter a string!');
});

test('return string with first char capitalized', () => {
    expect(capitalize('apple')).toBe('Apple');
});