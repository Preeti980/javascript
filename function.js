//block of code that performs a specific task , acn be invoked whenever needed
//function definition
function functionName(){
    //code to be executed when the function is invoked
    console.log("Hello World");
}
//function call
functionName();

//function with arguments---> a and b is parameter
//parameter and aragument both are same
function addNumbers(a, b){
    console.log(a + b);
}
addNumbers(5, 10);

// return value using function 
function mulNum(a,b){
    //a,b are local variables --> block scope
    m = a*b;
    console.log("before return");
    return m;
    console.log("after return");//this code will naver execute
}
console.log(mulNum(2,3)) //output--> before return 

//Arrow functions---> compact way of writing functions
const addNumbersArrow = (a, b) => {
    console.log(a + b);
}
addNumbersArrow(5, 10);

//default parameter in function
//without parameter of arraow function
const printHello=() =>{
    console.log("hello");
}
printHello()

//Qs. Create a function using the "function" keyword that takes a string as an argument & return the number of vowels in the string
const countVol=(str)=>{
 let count =0;
 for(const char of str){
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
        count++;
    }
 }
 console.log(count);
}
countVol("abcdeoo");//output --> 4
