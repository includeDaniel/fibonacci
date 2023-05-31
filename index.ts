const fibonacci = (
    n: number,
    prev = new Map<number, number>(),
    error: string = 'only accepts positive values'
): number => {
    if (n < 0) throw new Error(error)
    if (prev.has(n)) return prev.get(n)!
    if (n == 0) {
        prev.set(n, 0)
        return 0
    }
    if (n <= 2 && n > 0) {
        prev.set(n, 1)
        return 1
    }
    const next = fibonacci(n - 1, prev, error) + fibonacci(n - 2, prev, error)
    prev.set(n, next)
    return next
}
export default fibonacci
