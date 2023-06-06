function calculateFunction(number1, number2){
    const firstParameter = number1;
    const secondParameter = number2;
    const multiply = number1 * number2;
    const multiplyString = multiply.toFixed(2);
    const multiplyValue = parseFloat(multiplyString);
    return multiplyValue;
}