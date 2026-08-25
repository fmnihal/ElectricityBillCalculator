function pow(base, exp) {
    return Math.pow(base, exp);
}

function modulo(a, b) {
    if (b === 0) {
        throw new Error("Division by zero");
    }
    return a % b;
}

module.exports = { pow, modulo };