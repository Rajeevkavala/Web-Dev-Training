// Map Filter Reduce

// Map -->naya array mein return value daalo

// The map() method creates a new array with the
//  results of calling a provided function on every 
// element in the calling array.\

// var arr = [1, 2, 3, 4, 5];

// arr.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

// var ans = arr.map(function(value){
//     console.log(value);
//     return value;
// })


// Filter ---> naye array mein true return value daalo
// The filter() method creates a new array with all
// elements that pass the test implemented by the provided function.

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// var ans = arr.filter(function(value){
//     return value%2;
// })




// Reduce ---> ek array mein se koi ek value banaao
// The reduce() method executes a reducer function
// (that you provide) on each element of the array,
// resulting in single output value.

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// accumulator = 0;
// The return value of the function is stored in 
// an accumulator (result/total).
// The accumulator becomes the single result of the reduce function.
// The reduce function is called on each element of the array.

// var ans = arr.reduce((accumulator,key)=>{
//     return accumulator*key;
// },1)


// var arr = [1,3,4,7,8]

// var sum = arr.reduce((acc,key)=>{
//     return acc+key;
// },0)

// console.log(sum);

// 11. Write a for loop to print numbers from 10 to 1 in reverse.

// for(var i=10;i>0;i--){
//     console.log(i);
// }

// i=10
// while(i>0){
//     console.log(i);
//     i--;
// }

// 12. Use a while loop to print multiples of 3 from 3 to 30.

// var i =3;
// while(i<=30){
//     console.log(i);
//     i+=3;
// }

// Write a program to calculate the sum of numbers from 1 to 100 using a loop.


// var sum =0;
// for(var i=1;i<=100;i++){
//     sum+=i;
// }

// console.log(sum);

// var i=1;
// while(i<=100){
//     sum+=i;
//     i++;
// }

// console.log(sum);

// Create a nested loop to print a star pattern.


// Use a for...of loop to iterate over the string "JavaScript"

// var str = "JavaScript";

// for(var char of str){
//     console.log(char);
// }



// Remove duplicate values from an array.

// var arr1 = [1,2,3,1,5];

// var arr = [...new Set(arr1)]

// var ans = new Set(arr);

// ans = Array.from(ans);

// arr.sort();

// for(var i=0;i<arr.length;i++){
//     if(arr[i] == arr[i+1]){
//         arr.splice(i,1);
//     }
// }


// Sort an array in descending order.

// var arr = [1,2,3,4,5,6,7,8,9];

// arr.sort((a,b)=>{
//     return b-a;
// })

// for(var i=0;i<arr.length;i++){
//     for(var j=0;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             var temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }


// Star Pattern

// var n = 5;
// for(var i=1;i<=n;i++){
//     var str = " ";
//     for(var j=1;j<=i;j++){
//         str+="*";
//     }
//     console.log(str);
// }