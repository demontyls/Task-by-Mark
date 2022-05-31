const arrayFibonacci:number[] = [1,1],
      arrayFactorial:number[] = [],
      defoltValue: number = 5;
let i:number = 0;

function findeFibonacciSeries (n:number) {
  for (i; i < n; i++) {
    let currentNumber:number =  arrayFibonacci[i] + arrayFibonacci[i + 1];
    arrayFibonacci.push(currentNumber);
  }
  return console.log(arrayFibonacci);
}

function findeFactorialSerise (n:number) {
  for(i = n - 1; i >= 1; i --) n *= i 
  return console.log(n);
}

findeFactorialSerise(defoltValue);
findeFibonacciSeries(defoltValue);
