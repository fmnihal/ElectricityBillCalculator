const basic = require('./basic');
const advanced = require('./advanced');

function calculateElectricityBill(units, lateMonths = 0) {
    if (typeof units !== 'number' || units < 0 || isNaN(units)) {
        throw new Error("Invalid units consumed");
    }
    if (typeof lateMonths !== 'number' || lateMonths < 0 || isNaN(lateMonths)) {
        throw new Error("Invalid late months");
    }

    let energyCharge = 0;

    if (units <= 100) {
        energyCharge = basic.multiply(units, 5);
    } else if (units <= 300) {
        const firstSlab = basic.multiply(100, 5);
        const remainingUnits = basic.subtract(units, 100);
        const secondSlab = basic.multiply(remainingUnits, 7);
        energyCharge = basic.add(firstSlab, secondSlab);
    } else {
        const firstSlab = basic.multiply(100, 5);
        const secondSlab = basic.multiply(200, 7);
        const remainingUnits = basic.subtract(units, 300);
        const thirdSlab = basic.multiply(remainingUnits, 10);
        energyCharge = basic.add(basic.add(firstSlab, secondSlab), thirdSlab);
    }

    const demandCharge = 50;
    const subtotal = basic.add(energyCharge, demandCharge);
    const vatRate = basic.divide(5, 100);
    const vatAmount = basic.multiply(subtotal, vatRate);
    const baseBill = basic.add(subtotal, vatAmount);

    let finalBill = baseBill;
    if (lateMonths > 0) {
        const growthFactor = basic.add(1, 0.02);
        const multiplier = advanced.pow(growthFactor, lateMonths);
        finalBill = basic.multiply(baseBill, multiplier);
    }

    return Number(finalBill.toFixed(2));
}

module.exports = { calculateElectricityBill };