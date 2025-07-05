// let element = document.getElementById("x");
// console.log(element);
// console.log(element.textContent);

// Function to change the text content of the element with id "x"
function changeText(){
    document.getElementById("x").textContent = "Welcome to Pulla Reddy Sweets";
}

// Function to change the color of the text in the element with id "x"
function changeColor(){
    document.getElementById("x").style.color = "red";
}

// Accessing elements with the class name "box" and logging their details
const boxes = document.getElementsByClassName("box");
console.log(boxes); // Logs the HTMLCollection of elements with class "box"
console.log(boxes[0]); // Logs the first element with class "box"
console.log(boxes[1]); // Logs the second element with class "box"
console.log(boxes[0].textContent); // Logs the text content of the first "box"
console.log(boxes[1].textContent); // Logs the text content of the second "box"

// Accessing elements with the tag name "h2" and logging their details
const titles = document.getElementsByTagName("h2");
console.log(titles); // Logs the HTMLCollection of <h2> elements
console.log(titles[0]); // Logs the first <h2> element
console.log(titles[1]); // Logs the second <h2> element
console.log(titles[0].textContent); // Logs the text content of the first <h2>
console.log(titles[1].textContent); // Logs the text content of the second <h2>

// Accessing the first element with the class name "note" using querySelector
const firstNote = document.querySelector(".note");
// Only returns the first element that matches the selector
console.log(firstNote);

// Accessing all elements with the class name "note" using querySelectorAll
const allNotes = document.querySelectorAll(".note");
// Returns a NodeList of all elements that match the selector
console.log(allNotes); // Logs the NodeList of elements with class "note"
console.log(allNotes[0]); // Logs the first element in the NodeList
console.log(allNotes[1]); // Logs the second element in the NodeList
console.log(allNotes[0].textContent); // Logs the text content of the first "note"
console.log(allNotes[1].textContent); // Logs the text content of the second "note"

// Accessing the element with id "box" and defining a function to modify it
const box = document.getElementById('box');
function changeBox() {
    box.textContent = "New Text"; // Changes the text content of the element
    box.style.color = "blue"; // Changes the text color to blue
    box.classList.add("highlight"); // Adds the "highlight" class to the element
}


// Adding an event listener to the button with class "eventLister"

const eventButton = document.querySelector('.eventLister');
const DoubleEventButton = document.querySelector('.DoubleClickEventLister');

eventButton.addEventListener("click",function(){
    alert("Event Listener Button Clicked!"); // Alert when the button is clicked
    changeBox(); // Call the changeBox function to modify the box element
});
// Adding a double-click event listener to the button with class "eventLister"

DoubleEventButton.addEventListener("dblclick",function(){
    alert("Event Listener when Button Double Clicked!"); // Alert when the button is clicked
    changeBox(); // Call the changeBox function to modify the box element
});


const hoverBox = document.getElementById("hoverBox");
	hoverBox.addEventListener("mouseover", () => {
    hoverBox.style.backgroundColor = "brown";
});
hoverBox.addEventListener("mouseout", () => {
    hoverBox.style.backgroundColor = "purple";
});

// Function to handle the submission of the form
document.getElementById("submitBtn").addEventListener("click", 
    function(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    const username = document.getElementById("username").value; // Gets the value from the input field
    if (username) {
        alert(`Hello, ${username}! Welcome to Pulla Reddy Sweets.`); // Displays a welcome message with the username
    }
    else {
        alert("Please enter your name."); // Prompts the user to enter their name if the input is empty
    }
})


//Validation for email input
document.getElementById("submitBtn").addEventListener("click",function(e){
    e.preventDefault(); // Prevents the default form submission behavior
    const email = document.getElementById("email").value; // Gets the value from the email input field
    const msg = document.getElementById("msg"); // Gets the message element to display validation messages
    if(email.includes("@") || email.includes(".")) {
        msg.textContent = "Email is valid."; // Displays a success message if the email is valid
        msg.style.color = "green"; // Sets the text color to green for success messages
 
    }
    else {
        msg.textContent = "Please enter a valid email address."; // Displays an error message if the email is invalid
        msg.style.color = "red"; // Sets the text color to red for error messages
    }
})