const capitalize = require('./capitalize.js');

describe('Capitalize the first letter of a string', () => {
    test('Expected output: Practice', () => {
        let string = 'practice';
        expect(capitalize(string)).toBe('Practice');
    });
});