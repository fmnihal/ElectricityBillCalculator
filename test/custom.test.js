const { calculateElectricityBill } = require('../Scripts/custom');

describe('Custom Calculator Unit Tests', () => {
    test('TC-01: First slab calculation (units <= 100)', () => {
        // (50 * 5) + 50 = 300; VAT(5%) = 15 => Total = 315
        expect(calculateElectricityBill(50, 0)).toBe(315);
    });

    test('TC-02: Second slab calculation (101 <= units <= 300)', () => {
        // (100*5 + 50*7) + 50 = 900; VAT(5%) = 45 => Total = 945
        expect(calculateElectricityBill(150, 0)).toBe(945);
    });

    test('TC-03: Third slab calculation (units > 300)', () => {
        // (100*5 + 200*7 + 50*10) + 50 = 2450; VAT(5%) = 122.5 => Total = 2572.5
        expect(calculateElectricityBill(350, 0)).toBe(2572.5);
    });

    test('TC-04: Calculation with late surcharge', () => {
        // Base = 315, Surcharge = 315 * (1.02)^2 = 327.73
        expect(calculateElectricityBill(50, 2)).toBe(327.73);
    });

    test('TC-05: Boundary input - zero units', () => {
        // 0 units => Demand(50) + VAT(2.5) = 52.5
        expect(calculateElectricityBill(0, 0)).toBe(52.5);
    });

    test('TC-06: Error handling for negative units', () => {
        expect(() => calculateElectricityBill(-10, 0)).toThrow("Invalid units consumed");
    });

    test('TC-07: Error handling for invalid types', () => {
        expect(() => calculateElectricityBill("abc", 0)).toThrow("Invalid units consumed");
    });
});