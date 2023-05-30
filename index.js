const fibonacci = (n, prev = new Map()) => {
    if (n < 0) throw new Error("only accepts positive values")
    if (prev.has(n)) return prev.get(n)
    if (n == 0) {
        prev.set(n, 0)
        return 0
    }
    if (n <= 2 && n > 0) {
        prev.set(n, 1)
        return 1
    }
    next = (fibonacci(n - 1, prev) + fibonacci(n - 2, prev))
    prev.set(n, next)
    return next
}

module.exports = fibonacci;