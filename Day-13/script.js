function cal(){
    let a = Number(document.getElementById("firstNum").value);
    let b = Number(document.getElementById("secondNum").value);
    let operator = document.getElementById("operation").value;
    let result;
    switch(operator){
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
        default:
            result = "Invalid operator";
    }
    document.getElementById("result").innerText = "Result: " + result;
}

function toUpperCase() {
    let inputText = document.getElementById("inputString").value;
    let upperCaseText = inputText.toUpperCase();
    document.getElementById("outputText").innerHTML = upperCaseText;
}

function countLength(){
    let inputText = document.getElementById("inputString").value;
    let length = inputText.length;
    document.getElementById("outputText").innerHTML = "Length: " + length;
}
function reverseString() {
    let inputText = document.getElementById("inputString").value;
    let reversedText = inputText.split('').reverse().join('');
    document.getElementById("outputText").innerHTML = "Reversed: " + reversedText;
}

function greet(name) {
    document.getElementById("output").innerHTML = "Hello, " + name;
    console.log("Hello, " + name);
}

function processUserInput(callback) {
    const name = document.getElementById("userData").value;
    callback(name);
}

function processWithGreet() {
    processUserInput(greet);
} 

function convertToFahrenheit() {
    const celsius = Number(document.getElementById("celsius").value);
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("output").innerHTML = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
}

function convertToCelsius() {
    const fahrenheit = Number(document.getElementById("fahrenheit").value);
    const celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("output").innerHTML = `${fahrenheit}°F is ${celsius.toFixed(2)}°C`;
}

function calAvg(){
    let a = Number(document.getElementById("marks1").value);
    let b = Number(document.getElementById("marks2").value);
    let c = Number(document.getElementById("marks3").value);
    let d = Number(document.getElementById("marks4").value);
    let e = Number(document.getElementById("marks5").value);
    let avg = (a + b + c + d + e) / 5;
    document.getElementById("output").innerHTML = "Average: " + avg;
    if (avg >= 90) {
        document.getElementById("output").innerHTML += " - Grade: A";
    } else if (avg >= 80) {
        document.getElementById("output").innerHTML += " - Grade: B";
    } else if (avg >= 70) {
        document.getElementById("output").innerHTML += " - Grade: C";
    } else if (avg >= 60) {
        document.getElementById("output").innerHTML += " - Grade: D";
    } else {
        document.getElementById("output").innerHTML += " - Grade: F";
    }
}