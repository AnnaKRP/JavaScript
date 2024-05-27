function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
        let resultMul = multiply(num1, num2);
        let resultAdd = add(num1, num2);
        let resultSub = substract(num1, num2);
        let resultDiv = divide(num1, num2);
        // Display the result
        displayResult(resultMul, resultAdd, resultSub, resultDiv);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;
    // Multiply the numbers
    return a * b;
}

function add(a, b) {
    debugger;
    return a + b;
}

function substract(a, b) {
    debugger;
    return a - b;
}

function divide(a, b) {
    debugger;
    return a / b;
}

//display results
function displayResult(multiply, add, subtract, divide) {
    const resultElement = document.getElementById('result');
    const resultText = `Results: <br><br> Multiplied - ${multiply} <br> Added - ${add} <br> Subtracted - ${subtract} <br> Divided - ${divide}`;
    resultElement.innerHTML = resultText;
}