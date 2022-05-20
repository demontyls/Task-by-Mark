
// let array = [7, 2, 5];
let array = [12, 7, 92, 5, 18, 4, 32, 48, 11, 74];

let newArray = [];
let inversionNum = 0;
let n = 0;

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (array[j] > array[1 + j]) {
      n = array[j];
      array[j] = array[1 + j];
      array[1 + j] = n;
      inversionNum += 1;
    }
  }
}
console.log(inversionNum);
console.log(array);


