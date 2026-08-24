const calculator = require("../src/advanced");

describe('Pow', () => {
    var BVAdata = [
        [2, 3, 8],
        [5, 0, 1],
        [3, 2, 9],
        [4, 1, 4]
    ]
    describe.each(BVAdata)('BVA: pow(%i, %i), Expected: %i', (x, n, expected) => {
        test(`returns ${calculator.pow(x, n)}`, () => {
            expect(calculator.pow(x, n)).toBe(expected);
        });
    });

    var DTdata = [
        [2, -1, 0.5],
        [-2, 2, 4],
        [10, 0, 1],
        [-3, 3, -27]
    ]
    describe.each(DTdata)('DT: pow(%i, %i), Expected: %i', (x, n, expected) => {
        test(`returns ${calculator.pow(x, n)}`, () => {
            expect(calculator.pow(x, n)).toBe(expected);
        });
    });
});

describe('Modulo', () => {
    var BVAdata = [
        [10, 3, 1],
        [20, 4, 0],
        [15, 6, 3],
        [9, 2, 1]
    ]
    describe.each(BVAdata)('BVA: modulo(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.modulo(a, b)}`, () => {
            expect(calculator.modulo(a, b)).toBe(expected);
        });
    });

    var DTdata = [
        [0, 5, 0],
        [-17, 5, -2],
        [17, -5, 2],
        [-17, -5, -2]
    ]
    describe.each(DTdata)('DT: modulo(%i, %i), Expected: %i', (a, b, expected) => {
        test(`returns ${calculator.modulo(a, b)}`, () => {
            expect(calculator.modulo(a, b)).toBe(expected);
        });
    });
});