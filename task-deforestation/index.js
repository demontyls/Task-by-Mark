const [numberTrees, remainingTrees, forest, optionsCutForest] = [5, 3, [], []];

function getRandomInt(max) {
  return Math.floor(Math.random() * max - 1);
}


function getFactorial(n) {
  for (let i = 0; i < numberTrees; i++) forest.push('T');


  for (let i = 0; i < numberTrees - remainingTrees; i++) {
    forest.splice(getRandomInt(numberTrees), 1, '.');
  }

  let currentRemainingTrees = forest.filter(t => t === 'T');
  
  if(currentRemainingTrees.length === remainingTrees) {
    if (optionsCutForest.length > 0) {
      if(optionsCutForest.flat().join('').includes(forest.join(''))) {
          console.log('повторение')
      } else {
        optionsCutForest.push([...forest]); 
      }
  
    } else {
      optionsCutForest.push([...forest]);
    }
  }

  forest.length = 0;

  if (n === 1) {
    console.log(2)
  }
  else return getFactorial(n - 1);
}

getFactorial(20);

console.log(...optionsCutForest)
