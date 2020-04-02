// Refactor 
// calculate-funktion
// isNumber (ternary)

function isNumber(x) {
	return  /^ *[-+]?[0-9]+(\.[0-9]+)*? *$/.test(x);
}

function round(number){
    return +number.toFixed(10);
}

function calculate(operation, num1Id, num2Id, resultId) {
    let enteredNum1 = document.getElementById(num1Id).value
    let enteredNum2 = document.getElementById(num2Id).value
    
    let operationText = operation === "+" ? "additionen" : "subtraktionen"

    // let operationText = ""
    // if (operation === '+'){
    //     operationText = "additionen"
    // }
    // else {
    //     operationText = "subtraktionen"
    // }

    if (!isNumber(enteredNum1)) {
        alert(`Första siffran i ${operationText} är inte ett nummer`)
        return
    }
    
    if (!isNumber(enteredNum2)) {
        alert(`Andra siffran i ${operationText} är inte ett nummer`)
        return
    }

    let num1 = parseFloat(enteredNum1)
    let num2 = parseFloat(enteredNum2)

    let result = operation ==="+" ? round(num1+num2) : round(num1-num2)

    // let result = 0
    // if (operator === '+'){
    //     result = round(num1 + num2)
    // }
    // else {
    //     result = round(num1 - num2)
    // }
    
    document.getElementById(resultId).innerText = result
}

