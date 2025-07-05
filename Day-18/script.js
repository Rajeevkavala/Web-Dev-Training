
// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Hello, World!");
//     },2000);
// });
// promise.then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.error("Error:", error);
// });


// async function fetchData() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     const data = await response.json();
//     console.log(data);
// }
// fetchData().catch((error) => {
//     console.error("Fetch error:", error);
// });

// console.log("Start");
// setTimeout(()=>{
//     console.log("Fetching Data");
// },5000);
// console.log("end");

//Callback Function

// function fetchData(callback) {
//     setTimeout(() => {
//         const data = { id: 1, title: "Post Title" };
//         callback(data);
//     }, 2000);
// }
// fetchData((data) => {
//     console.log("Data fetched:", data);
// });


//Promises chaining

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Data fetched successfully!");
//     }, 2000);
// });
// promise
//     .then((message) => {
//         console.log(message);
//         return "Processing data...";
//     })
//     .then((processedMessage) => {
//         console.log(processedMessage);
//         return "Data processed!";
//     })
//     .then((finalMessage) => {
//         console.log(finalMessage);
//     })
//     .catch((error) => {
//         console.error("Error:", error);
//     });

// Async/Await with error handling
// async function fetchData() {
//     try {
//         const response = await new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve("Data fetched successfully!");
//             }, 2000);
//         });
//         console.log(response);
//         const processedMessage = "Processing data...";
//         console.log(processedMessage);
//         const finalMessage = "Data processed!";
//         console.log(finalMessage);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }
// fetchData();


