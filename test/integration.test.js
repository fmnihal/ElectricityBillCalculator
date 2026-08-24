const basic = require('../Scripts/basic');
const advanced = require('../Scripts/advanced');
const custom = require('../Scripts/custom');

describe('Integration Tests - Module Interactions', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('IT-01: Verifies interaction with both basic and advanced modules', () => {
        const multiplySpy = jest.spyOn(basic, 'multiply');
        const subtractSpy = jest.spyOn(basic, 'subtract');
        const addSpy = jest.spyOn(basic, 'add');
        const divideSpy = jest.spyOn(basic, 'divide');
        const powSpy = jest.spyOn(advanced, 'pow');

        const result = custom.calculateElectricityBill(150, 2);

        expect(subtractSpy).toHaveBeenCalled();
        expect(multiplySpy).toHaveBeenCalled();
        expect(divideSpy).toHaveBeenCalled();
        expect(addSpy).toHaveBeenCalled();
        expect(powSpy).toHaveBeenCalled();
        expect(result).toBeGreaterThan(0);
    });

    test('IT-02: Integration testing using a Stub for advanced.pow', () => {
        // Stubbing pow to return a fixed 1.10 multiplier
        jest.spyOn(advanced, 'pow').mockImplementation(() => 1.10);

        // Base bill for 50 units is 315. With stub multiplier: 315 * 1.10 = 346.5
        const result = custom.calculateElectricityBill(50, 5);
        expect(result).toBe(346.5);
    });
});