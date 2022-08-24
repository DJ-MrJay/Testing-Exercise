const reverseString = require('./reverseString');

describe('Reverse the string', () => {
    test('Expected output: ecitcarp', () => {
        let string = 'practice';
        expect(reverseString(string)).toBe('ecitcarp');
    });
});