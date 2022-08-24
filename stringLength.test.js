const stringLength = require('./stringLength.js');

describe('String Tests', () => {
    let string = 'practice';
    test('String length should be 8', () => {
        expect(stringLength(string)).toBe(8);
    });
});