# Fibonacci Function
This is a JavaScript function that calculates the nth term of the Fibonacci sequence. The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding numbers.

Usage
The function takes a single parameter, number, which represents the term in the Fibonacci sequence to calculate.
````
    fibonacci(5); // returns 5
    fibonacci(10); // returns 55
    fibonacci(0); // returns 0
    
````
If the value of number is less than 1, the function will return 0. If the value of number is 1 or 2, the function will return 1.

Algorithm
The function uses a loop to calculate the nth term of the Fibonacci sequence. It initializes two variables, term1 and term2, to 1, and a third variable, result, to 0. It then iterates over the loop, adding term1 and term2 to get the value of result, and then updating the values of term1 and term2 to be the previous two terms in the sequence. The loop continues until it has iterated number - 2 times, at which point the value of result will be the nth term of the sequence.

