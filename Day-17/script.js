// what is a function

// Ans: A block of reusable code we can run at any point of time

// function greet() {
//     console.log("Hello");
// }

// greet();
// greet();
// greet();

// why function

// ans:when we don`t want to run the 
// code immediately we and we need to reuse the code

// function greet() {
//     console.log("Hello");
// }
    
// why we need function

// we dont want to write the same code so many times

// In Software we follow two principles

// 1.WET => Write everything twice
// 2.DRY => Don`t repeat yourself



// how to create a function

// function greet() {
    // this is called function statement
//     console.log("Hello");
// }


// how to call a function

// greet();
// greet();
// greet();

// how to pass parameter to a function

// What is a parameter?
//      function name(parameter){
//          Logic
//      }

// function say(parameter){
//     console.log(parameter);
// }

// say("Red Flower")
// say("Pig Ass")
// say("Konda babu")


// how to pass args to a function

// say("Red Flower")


// types of function (6 Types)

// 1.Functional Statements

// function abcd(){
//     console.log("Hello World");
// }
// abcd();

// 2.Function Expression

// let abcde = function(){
//     console.log("Hello World");
// }

// abcde();


// 3.Anonymous Function

// function (){

// }

// 4.fat arrow function

// let func = ()=>{

// }

// 5.fat arrow with one parameter function

// let func1 = a =>{
//     console.log(a);
// }
// func1(20)
 
// 5.fat arrow with implicit return

// What is return

// function ab(a){
//     return a;
// }
// let result = ab(12);
// console.log(result);

// fat arrow with implicit return

// let  a = ()=>"Hey this is implicit function";

// console.log(a());



// Example of function to find the sum of n number

// let result=0;
// function sumOfN(n){
//     for(let i=0;i<n;i++){
//         result+=i;
//     }
//     return result;
// }
// let output = sumOfN(10)
// console.log(output);


// Rest Parameters

// function dfg(a,b,c,d,...rest){
//     console.log(a,b,c,d,rest);
// }
// dfg(1,2,3,4,5,6,7,8)

// Hoisting
// Hoisting in JavaScript means 
// variable and function declarations 
// are moved to the top before execution,
// but only declarations, not values.

// console.log(a); //Undefined
// var a = 12;
// var a; This will go to top
// a=12   This will not go



// console.log(a());
// var a = () => {
//     return 10;
// }


// const greet = ()=>{
//     console.log(10);
// }
// greet();
// greet = ()=>{
//     console.log(12);
// }


// iife
// higher order function (HOFs)
// call back function
// first class func
// pure and impure func
// global scope
// local scope
// closure