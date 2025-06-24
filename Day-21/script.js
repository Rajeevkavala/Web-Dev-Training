
// This document contains JavaScript questions with detailed solutions.
// Console & Basic Operations (5 Questions)
// 1. Log "Hello, JavaScript!" to the console in 3 different ways.

console.log("Hello, JavaScript!");
console.info("Hello, JavaScript!");
console.warn("Hello, JavaScript!");
console.error("Hello, JavaScript!");
console.table({name:"Rajeev",age:20,city:"Hyderabad"})

// 2. Perform 35 • 2 - (IO | 2) + 7 and log the result.

console.log(35*2-(10/2)+7);

// 3. Log the data type of "123", 123, true, and null using typeof.

// typeof is based on concept of datatag

// steel,plastic,wooden,iron


console.log(typeof ("123"));
console.log(typeof (123));
console.log(typeof (undefined));
console.log(typeof (true));

//There is mistake while making javascript like null is 
// object but it is not object it is null
// For Object datatag is 000
// For null datatag by mistake is 000

console.log(typeof (null));
console.log(typeof (NaN));
console.log(typeof (function fun(){}));
console.log(typeof ([1,2,3,4,5]));



// 4. Write a program that swaps the values of two variables.
let a = 5;
let b = 10;

console.log("Before Swapping:",a, b);

a = a + b; //a=15
b = a - b; //b=5
a = a - b; //a=10

// [a,b] = [b,a];

// let temp = a;
// a = b;
// b = temp;

console.log("After Swapping:",a, b);

// 5. Use console.group() to organize logs into a group.
console.group("Group 1");
console.log("Hello, JavaScript!");
console.log("I am Rajeev");
console.log("I am Kavala");
console.groupEnd();


// @Variables & Data Types (5 Questions)
// 6. Declare a const object, modify its properties, and log the updated object.

const obj = {
    name: "Rajeev",
    age: 20,
    city: "Hyderabad"
}
// Object.freeze(obj);
console.log("Before Updating",obj);
obj.name = "Rahul";
obj.age = 25;
obj.city = "Bangalore";

obj.collage = "MRUH"

console.log("After Updating",obj);

// 7. Convert "50" (string) into a number using 3 different methods.

let str = "50";
console.log(str, typeof str);
console.log(Number(str),typeof Number(str));
console.log(parseInt(str),typeof parseInt(str));


let num3 = +str;
console.log(num3, typeof num3);


// 8. Check if "JavaScript" contains "Script" without using .includes().

let str1 = "JavaScript";
let str2 = "Script";

// console.log(str1.includes(str2));

console.log(str1.indexOf(str2) != -1 ? true : false);

console.log(str1.search(str2) != -1 ? true : false);

// 9. Create an array of 5 numbers and log the sum using .reduce().

let arr = [1,2,3,4,5];

console.log(arr);

// 10. Explain the difference between undefined, null, and NaN with examples.



// This document provides clear explanations and collapsible answers for easy reference. Happy coding!