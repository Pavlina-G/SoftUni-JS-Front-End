function subtract() {
    let firstNum = document.getElementById('firstNumber').value;
    let secondNum = document.getElementById('secondNumber').value;
    const result = document.getElementById('result');

    result.textContent = Number(firstNum) - Number(secondNum);

    firstNum = '';
    secondNum = '';
}