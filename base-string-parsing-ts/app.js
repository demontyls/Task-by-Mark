var _a = ['2+3=5', '3*7=20', 'two plus three is five'], mathExpressionA = _a[0], mathExpressionB = _a[1], mathExpressionC = _a[2];
function expressionValidation(expression) {
    var reg = /(\-(?!\d)|\d+|\-+\d)/, operationSymbols = ['+', '-', '*', '/'], convertedExpression = expression.split(reg).filter(Boolean), numberA = Number(convertedExpression[0]), operation = convertedExpression[1], numberB = Number(convertedExpression[2]), symbolEquals = convertedExpression[3], total = Number(convertedExpression[4]);
    console.log(convertedExpression);
    var answer, checkValidNumber = isNaN(numberA) || isNaN(numberB) || !numberA || !numberB, checkValidOperation, gapChecking = expression.includes(' ');
    operationSymbols.forEach(function (symbol) { return checkValidOperation = symbol === operation && symbolEquals === '='; });
    if (checkValidNumber || checkValidOperation || gapChecking) {
        console.log('ERROR');
    }
    else {
        switch (convertedExpression[1]) {
            case '+':
                answer = numberA + numberB === total;
                break;
            case '-':
                answer = numberA - numberB === total;
                break;
            case '*':
                answer = numberA * numberB === total;
                break;
            case '/':
                answer = numberA / numberB === total;
                break;
        }
        console.log(answer);
    }
}
expressionValidation(mathExpressionA);
expressionValidation(mathExpressionB);
expressionValidation(mathExpressionC);
// https://acmp.ru/index.asp?main=task&id_task=80
