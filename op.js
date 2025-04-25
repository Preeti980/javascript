//Artimetic operation
let a=5;
let b=2;
console.log(a+b);// 7
console.log(a-b);//3
console.log(a*b);//10
console.log(a/b);//2.5
console.log(a%b);//1
console.log(a**b);//5^2 = 25
//unary operator
a=a+1; // or a++ both are same which is 6 which is post increment
console.log(a); //5
a = a-1; // or a-- both are same which is 4 post decrement
++a;//6 preincrement

let a=5;
console.log( a++);//postincrement 5
console.log(a);//6
let b=5;
console.log(++b);//preincrement 6
console.log(b);//6
let c=5;
console.log(c--);//postdecrement 5
console.log(c);//4
let d=5;
console.log(--d );//predecrement 4
console.log(d);//4


let mode="dark";
let color;
if(mode === "dark"){
    color="black";
    console.log(color);
}else{
    color="light";
    console.log(color);
}

let num=10;
if(num % 2 === 0){
    console.log("number is even");
}else{
    console.log("Number is odd");
}

let mode ="dark";
let color;

if(mode === "dark"){
    color = "black";
}else if(mode === "pink"){
    color = "pink";
}else if(mode === "yellow"){
    color = "yellow";
}else{
    color ="light";
}

//ternary operator
//condition ? true output: false output
let num1=num === 10?"it correct" : " it is incorrect";
console.log(num1);



//MDN Docs



// alert("hello!");
let nums = prompt("enter your number");
if(nums % 5 === 0){
    console.log("Number is multiple of 5");
}else{
    console.log("number is not multiple of 5");
}

let marks = prompt("enter your marks");
if (marks > 80 && marks <100){
    console.log("A");
}else if(marks > 70 && marks <89){
    console.log("B");
}else if(marks >60 && marks < 69){
console.log("C")
}else if(marks > 50 && marks<59){
    console.log("D");
}else{
    console.log("F");
}


