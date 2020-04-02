// function sum(){

//     let num1 = parseFloat(document.getElementById("num1").value);
//     let num2 = parseFloat(document.getElementById("num2").value);

//     let result = num1+num2;

//     document.getElementById("result").innerText = result;
// }

// Validering. 
// Avrundning

function isNumber(x) {
    return /^ *[-+]?[0-9]+(\.[0-9]+)*? *$/.test(x);
}

function isNumber_alternative(x) {
    return !(isNaN(x) || x == "")
}

// För att slippa problem med t.ex 1-2.3 = -1.2999999999999998
// Man har + före number för att det inte bara ska kapas av vid 10 decimaler, utan rundas av korrekt, typ.
function round(number) {
    return +number.toFixed(10);
}

function sum() {
    let enteredNum1 = document.getElementById("num1").value
    let enteredNum2 = document.getElementById("num2").value

    if (!isNumber(enteredNum1)) {
        alert("Första siffran är inte ett nummer")
        return
    }

    if (!isNumber(enteredNum2)) {
        alert("Andra siffran är inte ett nummer")
        return
    }

    let num1 = parseFloat(enteredNum1)
    let num2 = parseFloat(enteredNum2)

    let resultAdd = round(num1 + num2)

    document.getElementById("resultAdd").innerText = resultAdd
}

function subtract() {
    let enteredNum3 = document.getElementById("num3").value
    let enteredNum4 = document.getElementById("num4").value

    if (!isNumber(enteredNum3)) {
        alert("Första siffran är inte ett nummer")
        return
    }

    if (!isNumber(enteredNum4)) {
        alert("Andra siffran är inte ett nummer")
        return
    }

    let num3 = parseFloat(enteredNum3)
    let num4 = parseFloat(enteredNum4)

    let resultSub = round(num3 - num4)

    document.getElementById("resultSub").innerText = resultSub
}