var arrayFibonacci = [1, 1], arrayFactorial = [], defoltValue = 5;
var i = 0;
function findeFibonacciSeries(n) {
    for (i; i < n; i++) {
        var currentNumber = arrayFibonacci[i] + arrayFibonacci[i + 1];
        arrayFibonacci.push(currentNumber);
    }
    return console.log(arrayFibonacci);
}
function findeFactorialSerise(n) {
    for (i = n - 1; i >= 1; i--)
        n *= i;
    return console.log(n);
}
findeFactorialSerise(defoltValue);
findeFibonacciSeries(defoltValue);
