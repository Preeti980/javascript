//forEach loop in Arrays---> its only use for array
arr.forEach(callbackFunction)
//CallbackFunction: Here, it is a function to execute for each element in the array
//" A callback is a function passed as an argument to another function".
let arr = [1,2,3];
arr.forEach(function printval(val){//val ---> value at each index in array
console.log(val);
})
//output 
//1
//2
//3

//forEach method passs as arrow function and it give same output
// we can pass only three argument 1-val, 2- idx, 3- arr 
arr.forEach((val, idx, arr)=> {
    console.log(val ,idx, arr);
});
//outputs
//1 0 (3) [1, 2, 3]
// 2 1 (3) [1, 2, 3]
// 3 2 (3) [1, 2, 3]

//Qs for interview ---> highter order function/ method kya hote hai
//In javaScript ,  a higher order function is a function that can either accept other functions as parameter or return a function as a result
//Qs. For a given array of numbers , print the square of each value using the forEach loop
let ar = [1,2,3,4];
ar.forEach((val)=>{
    console.log(val*val);
})
