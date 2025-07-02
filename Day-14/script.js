let marks = [10,34,55,66,23,9];

// document.getElementById("output").innerHTML = marks;

function addElement(){
    var newElement = document.getElementById("arrayElement").value;
    if(newElement === "") {
        alert("Please enter a value to add.");
        return;
    }
    else{
        marks.push(newElement);
        document.getElementById("output").innerHTML = marks;
    }
}

function removeElement() {
    if(marks.length === 0) {
        alert("Array is empty, nothing to remove.");
        return;
    }
    else{
        marks.sort((a, b) => a - b); 
        marks.pop();
    }
    document.getElementById("output1").innerHTML = marks;
}

function avgMarks(){
    if(marks.length === 0) {
        alert("Array is empty, cannot calculate average.");
        return;
    }
    let sum = marks.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let average = sum / marks.length;
    document.getElementById("output2").innerHTML = "Average Marks: " + average.toFixed(2);
}

function displayAndFilter() {
    if(marks.length === 0) {
        alert("Array is empty, nothing to display.");
        return;
    }
    let filteredMarks = marks.filter(mark => mark >= 50);
    document.getElementById("output3").innerHTML = "Marks greater than or equal to 50: " + filteredMarks.join(", ");
}

function displayMarks() {
    if(marks.length === 0) {
        alert("Array is empty, nothing to display.");
        return;
    }
    marks.forEach((mark,index)=>{
        document.getElementById("output4").innerHTML += `Index: ${index}, Value: ${mark}<br>`;
    })
}

var cart = [
    { name: "Apple", price: 1.2, quantity: 3 },
    { name: "Banana", price: 0.5, quantity: 5 },
    { name: "Orange", price: 0.8, quantity: 2 }
]

console.log("Before Adding: ");
console.log(cart);


cart.push({ name: "Mango", price: 1.5, quantity: 4 });

console.log("After Adding: ");
console.log(cart);


