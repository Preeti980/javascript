

//Loops in JS
//for loop
for(let i=1;i<= 5;i++){
    console.log("I can Do EveryThing");
}
console.log("loop has ended");

//calculate sum 1 to 5
let sum=0;
for(let i=1;i<=5;i++){
    sum = sum+i;
}
console.log(sum);

//while loop
// while(condition){
//     //do something
// }

let i=1;
while(i<=5){
    console.log("I can do everything");
    i++;
}
//do{//do some work}while(condition);
let j =20;
do{
console.log("I Want to become a software developer");
j++;
}while(j <= 10);
//for-of loop---> it is used for string and array
//for(let val of strVar){//do some work}
let str = "ApnaCollege";
let size = 0;
for(let i of str){
    console.log("i",i);
    size++;
}
console.log("String Size is =",size);

//for-in loop ----> used for object--> it returns key of object
let student = {
    name:"priya singh",
    age:22,
    cgpa:7.5,
    isPass:true,
};

for(let i in student){ // it return key of array
    console.log(i);
}

for(let key in student){
    console.log("key = ", key, " , value=", student[key]); // yha pe student["key"] karne ki jarurat nhi hai
}

//print 1 to 100 even number
for(let i=1;i<=100;i++){
    if(i%2 === 0){
        console.log(" even number" , i);
    }
}
//print 1 to 100 odd number
for(let i=1;i<=100;i++){
    if(i%2 !== 0){
        console.log(" odd number = " , i);
    }
}

*****
//important
//create a game where you start with any random game number. Ask user to keep guessing the game number unit the user enters correct value.
let gameNumber =25;
let userNum = prompt("guess the number : ");
while(userNum != gameNumber){// yha prompt ek string return karega esliye != likhenge
  //because gameNum is a number and userNum is a string 
userNum = prompt("You entered wrong number. Guess again :");
}
console.log("congratulation 🎉, you entered the right number");

//string
// 1- let str = 'priti';
//type 2
let str = "Priti";
console.log(str.length , "and", str[1]);

// "\n" use in string to print next 

//Template Literals in JS  type-3
let specialString = `This is template \n literal`;
console.log(specialString);
console.log( typeof specialString); //string

let obj ={
    item:"pen",
    price:10,
};
console.log("the co 
let output = `the cost of ${obj.item} is  ${obj.price} rupees`;
console.log(output);//same output  

//*****
let str = "Apna\tCollege";//12 -->\t ki length 1 hoti hai 
console.log(str.length); 
