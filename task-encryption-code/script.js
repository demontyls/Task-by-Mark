const arrayCipher = '0123456789';
arrayLenght = 10;
codeLenght = 5;
arrayCipherSecond = '0123400056789';
arrayLenghtSecond = 13;
codeLenghtSecond = 2;

function decryptionCode(array, arraylength, code) {
  let arrayBaseCode = [];
      answer = 0;
      
  for(let i = 0; i < arraylength; i++) {
    let baseCode = [];
    
    for(let j =  0; j < code; j++) {
      baseCode.push(array[i + j]); 
    }
    arrayBaseCode.push(baseCode);
  }

  let arrayConvertedElem = [];
  
  arrayBaseCode.forEach((arrayItem)=> {
    let convertedElem = '';
    
    arrayItem.forEach((index)=>{
      convertedElem += index;
    })
    arrayConvertedElem.push(convertedElem);
  });

  for(let i = 0; i < arrayConvertedElem.length; i++) {
    if(arrayConvertedElem[i] == arrayConvertedElem[1 + i]) {
      answer += 1;
    } 
  }

  let finalAnswer = answer > 0 ? 'YES' : 'NO';
  console.log( `${array} --- Присутствие шифровки: ${finalAnswer}`);
}

decryptionCode(arrayCipherSecond, arrayLenghtSecond, codeLenghtSecond);
decryptionCode(arrayCipher, arrayLenght, codeLenght);