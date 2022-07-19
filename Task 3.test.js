const calc = require('./Task 3');

const numbers = new calc(2, 3);

describe('test calculator', () => {
    test('addition', () => {
        expect(numbers.add()).toBe(5);
    });
    test('substraction', () => {
        expect(numbers.sub()).toBe(-1);
    });
    test('multiplication', () => {
        expect(numbers.multi()).toBe(6);
    });
    test('division', () => {
        expect(numbers.div()).toBeCloseTo(0.6666666666);
    });
});