const fibonacci = (number) => {
    if (number == 0) return number
    if (number <= 2 && number > 0) return 1
    return (fibonacci(number - 1) + fibonacci(number - 2))
}


module.exports = fibonacci;