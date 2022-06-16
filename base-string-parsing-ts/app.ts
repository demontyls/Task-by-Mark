const [mathExpressionA, mathExpressionB, mathExpressionC]: string[] = ['2+3=5','3*7=20','two plus three is five'];

function expressionValidation (expression: string) {
    const reg = /(\-(?!\d)|\d+|\-+\d)/,
    operationSymbols: string[] = ['+','-','*','/'],
    convertedExpression = expression.split(reg).filter(Boolean),
    numberA: number = Number(convertedExpression[0]),
    operation: string = convertedExpression[1],
    numberB: number = Number(convertedExpression[2]),
    symbolEquals: string = convertedExpression[3],
    total: number = Number(convertedExpression[4]);
    console.log(convertedExpression);
    
    let answer: boolean,
    checkValidNumber: boolean = isNaN(numberA) || isNaN(numberB) || !numberA || !numberB,
    checkValidOperation: Boolean,
    gapChecking: Boolean = expression.includes(' ');
    
    operationSymbols.forEach((symbol: string) => checkValidOperation = symbol === operation && symbolEquals === '=');

    if (checkValidNumber || checkValidOperation || gapChecking) {
        console.log('ERROR');
    } else {
        switch(convertedExpression[1]) {

            case '+': answer = numberA + numberB === total;
            break;
        
            case '-': answer = numberA - numberB === total;
            break;
        
            case '*': answer = numberA * numberB === total;
            break;
        
            case '/': answer = numberA / numberB === total;
            break;
            }
            console.log(answer);
    }
}

expressionValidation(mathExpressionA);
expressionValidation(mathExpressionB);
expressionValidation(mathExpressionC);
    
// https://acmp.ru/index.asp?main=task&id_task=80