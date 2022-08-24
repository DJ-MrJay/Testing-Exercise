import Calculator from './calculator.js';

describe('Calculator test', () => {
    const calculator = new Calculator(2, 8);
    test('Add 2 + 8 = 10', () => {
        let sum = calculator.add();
        expect(sum).toEqual(10);
    });
    test('Subtract 2 - 8 = -6', () => {
        let sub = calculator.subtract();
        expect(sub).toEqual(-6);
    });
    test('Multiply 2 * 8 = 16', () => {
        let product = calculator.multiply();
        expect(product).toEqual(16);
    });
    test('Divide 2 / 8 = 0.25', () => {
        let division = calculator.divide();
        expect(division).toEqual(0.25);
    });
});