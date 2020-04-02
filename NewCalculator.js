function sum(){
    
    // let num1 = 0;
    // let num2 = 0;

    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let result = num1+num2;

    document.getElementById("result").innerText = result;
}