
name = "priti";
age = 24;
x =null;//eska matalb hai khali 
y=undefined;//eska matalab hai pta nhi kya hai
console.log(name);
console.log(x);
console.log(y);
isFollow= false;
console.log(isFollow);

fullname="priti chauhan";
FULLNAME= "priti singh";
console.log(fullname);
console.log(FULLNAME);
Console = "priya";
console.log(Console);

variables var let const 
let fullName = "priti chauhan";
console.log(fullName);
var age =24; // eska use nhi karte hai
var age = 59;
var age = 89;
console.log(age);


let a =23; // let a; it is also possible 
// let a =90;  can not write this line 
a =90; // only change this value


const age = 24;// const a; it show error 
age = 59;// it show error  // no compile time error only run time error we get
console.log(age);
const PI = 3.14;


it is possible with let
{
    let a =5;
    console.log(a);
}
{
    let a =10;
    console.log(a);
}

// data types --> Number,String , Boolean, Undefined,Null,Biglnt,Symbol---> these are all primitive data types
let age = 3;
let price = 390.10;
// number = 20,20.4,-30,// sare number me hi ayenge
// o/p age ---> 3 ----> typeof age --> number

let fullName = "priti";
//o/p= fullName ---> priti ---> typeof fullName ---> string
let x;
//o/p= x --> undefined ---> typeof x ----> undefined

let y = null;
//o/p y---> null----> typeof y ----> object
let z= BigInt("123");
//o/p z--->123n --->typeof z--->bigint
let p = Symbol("Hello!");
//o/p p--->Symbol(Hello!) --->typeof y ---> symbol

//non-primitive datatypes - objects, Arrays, functions

//non-primitive datatypes - objects, Arrays, functions
const student={
    fullName :"priti chauhan",
    age:20,
    cgpa:8.2,
    isPass:true,
}
//o/p  student--> above content ---> typeof student--> object
console.log(student["fullName"]); o/p --> priti chauhan
console.log(student["age"]) ; or console.log(student.age);


//practice question
const product ={
title:"Ball pen",
rating:4,
offer:5,
price:270,
};
console.log(product);

//important note
// "123" +1 ---> o/p = "1231"  "priti" +12 ---> o/p = 'priti12'

// next parctice for social media profile
const profile ={
    userName :"priti@12",
     isfollow:true,
     post:23,
     followers:400,
     following:4,
     bio:" this is my best profile",
}
console.log(typeof profile); //o/p = object
console.log(typeof profile("username")); //o/p = string
