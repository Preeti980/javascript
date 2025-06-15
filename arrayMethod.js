//array methods

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

//some more method
//map method---> Creates a new array with the results of some operation. the value its callback return are used to form new array
//it is same as foreach but it return a array
 //syntax-->Array.map(callbackFnx(value,index,array))

let nums =[67,52,39];
let newArr = nums.map((val)=>{
    return val;
})
console.log(newArr);//output: [67,52,39]

//filter method
//creates a new array of elements that give true for a condition / filter
let newArr1 = nums.filter((val)=>{
    return val > 50;
})
console.log(newArr1);//output :[67,52]

//reduce method
//Perform some operations & reduce the array to a single value . it returns that single value
//input me bahut number hote hai but output me ek hi number ata matlab ek ya do
let arr = [1,2,3,4];
const output = arr.reduce((res,curr)=>{
    //sum of array 
    return res+curr;
    //to check largest number
    // return prev > curr ? prev :curr;
});
console.log(arr);//output :10

//Qs. We are given array of marks of students . filter out of the marks of students that scored 90+
let marks = [78, 90, 65, 82, 75, 95, 85];
let newMarks = marks.filter((mark)=>{
    return mark >= 90;
});
console.log(newMarks); // output: [90, 95]

//Qs. take a number n as input from user. Create an array of numbers from 1 to n.
let n = prompt("enter a nnumber");
let arrr = [];
for(let i=1;i<= n ; i++){
arrr[i-1]=i;
}
console.log(arrr);
//use the reduce method to calculate sum of all numbers in the array
let num = arrr.reduce((prev,curr)=>{
    return prev+curr;
})
console.log(" sum = "+ num);
//use the reduce method to calculate product of all numbers in the array
let product = arrr.reduce((prev,curr)=>{
    return prev*curr;
})
console.log("Product of num or factorial of num = "+product);//it it also known as factorial function
