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



// greet();
// function greet(){
//     console.log("Hello");
// }


// const greet = ()=>{
//     console.log(10);
// }
// greet();
// greet = ()=>{
//     console.log(12);
// }


// iife --->immediately invoked function expression

// Example-1

// var ans = (function abcd(){
//     var a = 10;
//     return {
//         set: function(val){
//             a = val;
//         },
//         get: function(){
//             console.log(a);
//         }
//     }
// })();

// ans.set("32");
// ans.get()

// Example-2

// var rajeev = (function rajeev(){
//     var lolo = 12;
//     return{
//         imageEffect: function(){
//             console.log("images effect");
//         },
//         mouseFollower: function(){
//             console.log("Mouse Follower");
//         }

//     }
// }())

// rajeev.imageEffect();
// rajeev.mouseFollower();



// higher order function (HOFs)

// function abcd(){
//     return function(){
//         return function(){
//             console.log("hello");
//         }
//     }
// }
// var result = abcd();

// var result1 = result();

// result1();


// call back function

// function abcd(val){
//     val();
// }
// abcd(function qwerty(){
//     console.log("Hello");
// })

// first class func --> It is a theory concept 
// The function is always first class

// var a = function(){

// }

// pure and impure func

    // Pure Function ---> A function without side effects 
    // (It does not modify the external or global state or variables)

    // function add(a,b){
    //     return a+b;
    // }

    // console.log(add(1,3));


// ImPure Function ---> A function with side effects 
// (It does modify the external or global state or variables)

    // total = 0;

    // function abcd(a){
    //     total += a;
    // }
    // abcd(10);
    // abcd(10);

    // console.log(total);



// global scope

// var a = 12; //Global 

// function add(){
//     console.log(a);
// }
// add();


// local scope


// function add(){
//     var a = 12; //Local
//     console.log(a);
// }
// add();
// console.log(a); //Error



// closure --> it is a concept where a function 
// returns another function and return function will have
// the data from parent function

                // or

// A closure is when a function returns another function,
// and the returned function can still access the variables
// from the original function.

// closure

// function abcd(){
//     var a = 12
//     return function qwerty(){
//         console.log(a);
//     }
// }

// var ans = abcd();
// ans();
