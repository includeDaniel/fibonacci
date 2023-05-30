const fibonacci = (n, prev = new Map()) => {
    if (n < 0) throw new Error("only accepts positive values")
    if (n == 0) return n
    if (n <= 2 && n > 0) return 1
    return (fibonacci(n - 1) + fibonacci(n - 2))

}


module.exports = fibonacci;