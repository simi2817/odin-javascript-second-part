const analyzeArray = require('./analyzeArray');

describe('analyzeArray()', () => {
    test('returns an object', () => {
        expect(typeof analyzeArray([])).toEqual('object');
    });
    test('checks for properties', () => {
        const output = analyzeArray([]);
        expect(output).toHaveProperty('average');
        expect(output).toHaveProperty('min');
        expect(output).toHaveProperty('max');
        expect(output).toHaveProperty('length');
    });
    test('input array of one element', () => {
        const output = analyzeArray([1]);
        expect(output).toEqual({
            average: 1,
            min: 1,
            max: 1,
            length: 1
        });
    });
    test('input array of more than one elements', () => {
        const output = analyzeArray([3,4,2,1,5]);
        expect(output).toEqual({
            average: 3,
            min: 1,
            max: 5,
            length: 5
        });
    });
});