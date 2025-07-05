// const Name = "Rajeev Kavala";
// const msg = `
//     This is 
//     ${Name} and I am learning JavaScript.
//     I am currently working on a project that involves creating a simple web page.`;

// document.write(msg);
// document.writeln(Name);



// //Rest Parameters

// function sum(...numbers){
//     return numbers.reduce((acc, curr) => acc + curr, 0);
// }

// console.log(sum(1, 2, 3, 4, 5)); 

// //object destructuring
// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };
// const { name, age, city } = person;
// console.log(name, age, city); // John 30 New York
// //array destructuring
// const fruits = ["apple", "banana", "cherry"];
// const [fruit1, fruit2, fruit3] = fruits;
// console.log(fruit1, fruit2, fruit3); // apple banana cherry
// //spread operator
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5];
// console.log(arr2); // [1, 2, 3, 4,

// //for of loop
// const numbers = [1, 2, 3, 4, 5];    
// for (const number of numbers) {
//     console.log(number); // 1 2 3 4 5
// }
// //for in loop
// const personObj = { name: "John", age: 30, city: "NewYork" };
// for (const key in personObj) {
//     console.log(`${key}: ${personObj[key]}`);
// }

// //Object Chaining
// const user = {
//     name: "John",
//     address: {
//         city: "New York",
//         zip: "10001"
//     }
// };

// console.log(user?.address?.city); // New York
// console.log(user?.phone?.number); // undefined (no error thrown)




// Assignment -1

const students = [
    {name:"Rajeev",score:69},
    {name:"Purva",score:90},
    {name:"Sundar Pichai",score:95},
    {name:"Elon Musk",score:80},
    {name:"Mark Zuckerberg",score:70}
]

let Student = (students)=>{
    for (const student of students) {
        let grade;
        if (student.score >= 90) {
            grade = 'A';
        } else if (student.score >= 80) {
            grade = 'B';
        } else if (student.score >= 70) {
            grade = 'C';
        } else if (student.score >= 60) {
            grade = 'D';
        } else {
            grade = 'F';
        }
        console.log(`Name: ${student.name} Scored:  ${student.score} Grade: ${grade}`);
    }
}

Student(students);



// Assignment -2
console.log("Assignment-2 Product List Handling");
const products = [
    { name: "Laptop", price: 80000},
    { name: "Mobile", price: 30000},
    { name: "Shirt", price: 1500},
    { name: "Shoes", price: 2500},
    { name: "Watch", price: 5000}
];

let Product = (products) => {
    console.log("Product List:");
    for(const product of products){
        console.log(`Name: ${product.name} | Price: ₹${product.price}`);
    }
    console.log("Products with price greater than ₹5000:");
    for(const product of products){
        if(product.price > 5000){
            console.log(`Name: ${product.name} | Price: ₹${product.price} `); 
        }
    }
}
Product(products);


//Assignment - 3
console.log("Assignment-3 Contact Form Data");
let contacts = [
    { name: "Rajeev", email: "rajeevkavala34@gmail.com", phone: "1234567890" },
    { name: "Dhana", email: "kundaladhana@gmail.com", phone: "0987654321" },
    { name: "",email: "", phone: "" },
    { name: "",email: "rajeev5@gmail.com", phone: "" },
    { name: "John Doe", email: "john@gmail.com", phone: "1122334455" },
]

let ContactForm = (contacts) => {
    for(const contact of contacts) {
        const name = contact.name || "Anonymous";
        const email = contact.email || "No Email";
        const phone = contact.phone || "No Phone";
        console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}`);
    }
};

ContactForm(contacts);

// Assignment - 4
console.log("Assignment-4 Employee Salary Report Generator");

const employees = [
    { name: "Rajeev", salary: 50000 },
    { name: "Dhana", salary: 60000 },
    { name: "John", salary: 70000 },
    { name: "Jane", salary: 80000 },
    { name: "Doe", salary: 90000 }
];

let EmployeeSalaryReport = (employees) => {
    console.log("Employee Salary Report:");
    const name = contact.name || "Anonymous";
    const Salary = contact.email || "No Email";
};



EmployeeSalaryReport(employees);

