//const name = require("/PATH");

module.exports = function Fibonacci(number) {

    var term1 = 0,
        term2 = 1,
        term3

    while (number >= 0) {
        term3 = term1;
        term1 = term1 + term2;
        term2 = term3;
        number--;
    }

    return term2;
}