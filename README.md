# Fibonacci Sequence with Memoization
This is a JavaScript module that calculates the Fibonacci sequence up to a given number n using memoization. The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones, usually starting with 0 and 1.

## Instalation
To use the fibonacci function with memoization, use npm to install the package:
```bash
    npm i @includedaniel/fibonacci
    
```
## Usage
To use the fibonacci function with memoization, require the module in your JavaScript file:
```bash
    const fibonacci = require('./fibonacci');

    const result = fibonacci(10);
    console.log(result); // Output: 55
```
The fibonacci function takes two parameters:

.'n' (required): The number up to which the Fibonacci sequence should be calculated.
.'prev' (optional): A 'Map' object used for memoization, which stores previously calculated Fibonacci numbers to improve performance. If not provided, a new Map will be created internally.
If 'n' is a positive integer, the function will return the Fibonacci number at position 'n' in the sequence. If 'n' is less than or equal to 0, an error will be thrown.

## Memoization
Memoization is a technique that allows the function to remember (or cache) the results of previous function calls, so that if the function is called again with the same inputs, it can return the cached result instead of recalculating it. This can significantly improve the performance of the function, especially for recursive algorithms like the Fibonacci sequence.

In this implementation, a 'Map' object is used as the memoization cache. When the 'fibonacci' function is called with a particular value of 'n', it first checks if the memoization cache ('prev') already contains the result for that value. If so, it retrieves the result from the cache and returns it immediately. This avoids redundant calculations and improves the overall efficiency of the Fibonacci function.

If the result for the given value of 'n' is not found in the cache, the function calculates it by recursively calling itself for the previous two Fibonacci numbers ('fibonacci(n - 1, prev)' and 'fibonacci(n - 2, prev)'), and then adds the two results together. The calculated result is stored in the cache for future use before being returned.

## License
This project is licensed under the MIT License.
