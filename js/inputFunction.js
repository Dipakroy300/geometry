function inputFunctionWithCheckValidation(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldString = inputField.value;
    const inputValue = parseFloat(inputFieldString);
    // check validation
    if(isNaN(inputValue) || inputValue <= 0){
        alert('Enter valid number only');
        return;
    }
    inputField.value = '';
    return inputValue;
}