// const json = {
//     "name": "Rajeev Kavala",
//     "age": 20,
//     "isMarried": false,
//     "isVirgin": false,
//     "address": {
//         "street": "234/B Sri Krishna Nagar",
//         "city": "Hyderabad",
//         "state": "Telangana",
//         "country": "India"
//     },
//     "hobbies": ["Reading", "Traveling", "Coding"],
//     "education": {
//         "degree": "Bachelor of Technology",
//         "field": "Computer Science",
//         "university": "Malla Reddy University",
//         "year": 2027
//     },
// }
// console.log("JSON Object:");

// console.log(json);

// // Converting JSON object to a JavaScript object
// console.log("JavaScript Object:");

// const obj = JSON.parse(JSON.stringify(json));
// console.log(obj);

// // JavaScript Object to JSON String
// console.log("JavaScript Object to JSON:");
// const jsonString = JSON.stringify(obj,null,2);
// console.log(jsonString);


// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(data => data.forEach(user => {
//         console.log(`Name: ${user.name}, Email: ${user.email}`);
//     }))
//     .catch(error => {
//         console.error("Error fetching data:", error);
//     });

// // Using async/await for fetching data
// async function fetchData() {
//     try {
//         const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=15");
//         if (!response.ok) {
//             throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         console.log("Fetched Data with async/await:", data);
//     } catch (error) {
//         console.error("Error fetching data with async/await:", error);
//     }
// }

// fetchData();
// // Fetching data from an API using promises

// async function fetchDataWithPromise() {
//     const promise = new Promise((resolve, reject) => {
//         fetch("https://random.dog/woof.json")
//             .then(response => {
//                 if (!response.ok) {
//                     reject("Network response was not ok");
//                 }
//                 return response.json();
//             })
//             .then(data => resolve(data))
//             .catch(error => reject(error));
//     });

//     try {
//         const data = await promise;
//         console.log("Fetched Data with Promise:", data);
//     } catch (error) {
//         console.error("Error fetching data with Promise:", error);
//     }
// }
// fetchDataWithPromise();



// const json = {
//     name:"Rajeev Kavala",
//     isMarried:false,
//     isHandsome:true,
//     isVirgin:true,
//     age:20,
//     address:{
//         street:"234/B Sri Krishna Nagar",
//         city:"Hyderabad",
//         state:"Telangana",
//         country:"India"
//     },
//     hobbies:["Reading","Traveling","Coding"],
//     education:{
//         degree:"Bachelor of Technology",
//         field:"Computer Science",
//         university:"Malla Reddy University",year:2027
//     }   
// };
// console.log("JSON Object:");
// console.log(json);
// // Converting JSON object to a JavaScript object
// console.log("JavaScript Object:");
// const obj = JSON.parse(JSON.stringify(json));
// console.log(JSON.stringify(obj, null, 2));
// document.writeln("JavaScript Object:<br>");
// document.writeln(JSON.stringify(obj, null, 2) + "<br>");


// const postData = {
//     title: "foo",
//     body: "bar",
//     userId: 1
// }

// fetch("https://jsonplaceholder.typicode.com/posts"),{
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(postData)
// }.then(response => {
//     if (!response.ok) {
//         throw new Error("Network response was not ok");
//     }
//     return response.json();
// })


//Assignment 1 Student Info App (Get Request + JSON Display)


//Assignment 2  FeedBack Submission Form (Post Request)
