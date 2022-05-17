
let twoDimensionalArray = [[1,3,6],[4,5],[9]];
let threeDimensionalArray = [[[4, 5],[2, 7]],[[4, 1],[6, 9]]];

let sum = 0;
let secondSum = 0;

twoDimensionalArray.forEach((first) => first.forEach((second) =>  sum += second));
threeDimensionalArray.forEach((first) => first.forEach((second) => second.forEach((third) => secondSum += third)));

console.log(sum);
console.log(secondSum); 