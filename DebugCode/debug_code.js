function performOperation(){
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    //Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)){
        //Perform the operation
        let result = arithmeticOperation(num1, num2);

        //display the result
        displayResult(result);
    } else {
        displayResult({
            sum: 'Invalid input',
            difference: 'Invalid iput',
            product: 'Invalid input',
            quotient: 'Invalid input'
        });
    }

    function arithmeticOperation(a,b){
        //Introduce a debugger statement to pause execution
        debugger;
        let sum = a + b;
        let difference = a - b;
        let product = a * b;
        let quotient =  a/b;
        //Multiply the numbers
        return {sum, difference, product, quotient};
    }

    function displayResult(result){
        //Display the result in the paragraph element
        const resultElement = document.getElementById('result');
        resultElement.innerHTML = `
        <p>The sum is: ${result.sum}</p>
        <p>The Difference is: ${result.difference}</p>
        <p>The Product is: ${result.product}</p>
        <p>The Quotient is: ${result.quotient}</p>`;
    }
}