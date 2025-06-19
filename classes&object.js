//important for interview point 
//classes and object
//prototypes in js
// a javaScript object in an entity having state and behavior (properties and method)
//js object have a special property called prototype.
//we can set prototype using __proto__
//if object & prototype have same method object's method will be used

//direct way of creating object
const student ={
  fullName:"priya singht",
  marks:94.4,
  printMarks:function(){
    console.log("marks =" , this.marks);//explain this --> means wahi object ki baat ho rhi hai
  }
  //when we will print this object then we can see we have special property which name is prototype
  //if we write in console
  student.toString; // then we can that ki esko to humne kave student object me kavi define hi nhi but ye kaha se aa rha hai to ye prototype se aa rha hai
//matlab objet ke andar ek aur object jiske andar kuch property and method hai 
//similarly array object ke andar jo push pop ki property hoti o esi prototype se ati hai


//we can create our own prototype
const employee = {
  // first way of defining a function within object
  calcTax(){
    console.log("tax rate is 10%");
  },
  // this second way of crate a function within object
  // calctax2: function(){
  //   console.log("tax rate is 10%");
  // }
  // dono hi tareek sahi hai function ko define karne ke liye
}
// if some new come in our company then create new 
const karanArjun = {
  salary:50000;
}
//if we want to use calcTax property in karanArjun object then we can write like this..
karanArjun.__proto__ = employee ; //this is used to set a prototype
// if we write in console
karanArjun.calcTax()// then it will work

// if 5 new employee come then 
const karanArjun1 = {
  salary:50000;
}
const karanArjun2 = {
  salary:50000;
}
const karanArjun3 = {
  salary:50000;
}
const karanArjun4 = {
  salary:50000;
}
karanArjun1.__proto__ = employee ;
karanArjun2.__proto__ = employee ;
karanArjun3.__proto__ = employee ;
karanArjun4.__proto__ = employee ;
// en sab me calctax naam ka function aa jayega
// if actully we talk about prototype then it is reference to an object

const employee = {
  // first way of defining a function within object
  calcTax(){
    console.log("tax rate is 10%");
  },
};
const karanArjun = {
  salary:50000;
  calcTax(){
    console.log("tax rate is 20%"); // jab kisi object ke andar and uske prototype ke andar same name ka function ho to  jo khud ke andar define kiya hua hai waai run hoga 
  }
}
karanArjun.__proto__ = employee ;
karanArjun.calTax(); // o/p --> tax rate is 20%

//classes in javaScript
//class is a program-code templete for creating objects
//those objects will have some state (variables) & some behaviour(function) inside it.
class MyClass{
    constructor(){...}
    myMethod(){...}
}
let myObj = new MyClass();
//jab bulk me hame object banana hota hai to hum class use karte hai beacause it it a blue print ob an 

//crate a class
class ToyotaCar{
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    
}
//class se object create karne 
let fortuner = new ToyotaCar();// es line ka matlab hai toyotaCar ki sari property and method fortuner ke andar akar store ho jaye 
// if we want to create another object then
let lexus = new ToyotaCar();
//crate a class
class ToyotaCar{
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.brandName = brand;
    }
}

let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner");

//constructor() method is : automatically invoked by new , initializes object 

class ToyotaCar{
//create own constuctor
constructor(){
    console.log("creating new object");
}
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.brandName = brand;
    }
}

let fortuner = new ToyotaCar();// new keyword constuctor ko initilize karta hai 
//creating new object
//if we call for to car then answer gives for both same 
let lexus = new ToyotaCar();//constuctor


class ToyotaCar{

constructor(brand){
    this.brandName = brand;
    console.log("creating new object");
}
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    // setBrand(brand){
    //     this.brandName = brand;
    // }
}

let fortuner = new ToyotaCar("fortuner");// new keyword constuctor ko initilize karta hai 
//output --> ToyotaCar {brandName: 'fortuner'}
let lexus = new ToyotaCar();//constuctor

class ToyotaCar{
constructor(brand,mileage){
    this.brandName = brand;
    this.mileage=mileage;
    console.log("creating new object");
}
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    } 
}

let fortuner = new ToyotaCar("fortuner",10);// new keyword constuctor ko initilize karta hai 
console.log(fortuner);
let lexus = new ToyotaCar("lexus", 12);//constuctor
console.log(lexus);
//inheritance in javascript
//inheritance is passing down properties & methods from parent class to child class.
class Parent{
}
class child extends Parent{
}
//if child & parent have same method , child's method will be used.[method overriding]
class Parent{
    hello(){
        console.log("hello");
    }
}
class Child extends Parent{};
let obj = new Child();
console.log(obj, obj.hello()); // it will work and write output here
class Person{
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("do nothing")
    }
}
class Engineer extends Person{
    work(){
        console.log("solve problems, build something");
    }
}
// here we have same work function in parent and child class but invoke only parent class function this method called method overrrinding 
class Doctor extends Person{
    work(){
        console.log("treat patients");
    }
}
let shradhaObj = new Engineer();

//super keyword--> parent se ek label upar hote hai jab usko call karna hota hai tab enka use kiya jata hai 
//the super keyword is used to call the constructor of its parent class to access the parents's properties and method
super(args)//calls Parent's constructor
super.parentMethod(args);
class Person{
    constructor(){
        this.species = "home sapiens";
    }
    eat(){
        console.log("eat");
    }
    
}
class Engineer extends Person{
    constructor(branch){//it will show error --> child ke andar jab hum koi construcor banate hai tab ye jaruri hota hai ki so super keyword ka use karke banaya gya ho 
        this.branch=branch;
    }
    work(){
        console.log("solve problems, build something");
    }
}

let engObj = new Engineer();
console.log(engObj);//it will show error 
class Person{
    constructor(){
        console.log("enter parent constructor");
        this.species = "home sapiens";
    }
    eat(){
        console.log("eat");
    }
    
}
class Engineer extends Person{
    constructor(branch){//it will show error --> child ke andar jab hum koi construcor banate hai tab ye jaruri hota hai ki so super keyword ka use karke banaya gya ho 
        
        console.log("enter child constructor");
        //for removing this problem 
        super(); // to invoke parent class constructor
        this.branch=branch;
        console.log("exit child contructor")
    }
    work(){
        console.log("solve problems, build something");
    }
}

let engObj = new Engineer("chemical engh");
class Person{
    constructor(name){
        this.species = "home sapiens";
        this.name=name;
    }
    eat(){
        console.log("eat");
    } 
}
class Engineer extends Person{
    constructor(name){
        super(name); // to invoke parent class constructor 
    }
    work(){
        console.log("solve problems, build something");
    }
}
let engObj = new Engineer("priti");
console.log(engObj);

console.log(engObj);
//output
// enter child constructor
//  enter parent constructor
//  exit child contructor
class Person{
    constructor(name){
        this.species = "home sapiens";
        this.name=name;
    }
    eat(){
        console.log("eat");
    } 
}
class Engineer extends Person{
    constructor(name){
        super(name); // to invoke parent class constructor 
    }
    work(){
        super.eat();
        console.log("solve problems, build something");
    }
}
let engObj = new Engineer("priti");
console.log(engObj);

//practice question
//question - you are creating a website for your college.create a class User with  2 Properties, name 7 email. It also has a method called viewData() that allows user to view website data.

class User{
    constructor(name,email){
        this.name=name;
        this.email = email;

    }
    viewData(){
        console.log("allow user to website");
    }
}
let pobj = new User("priye","priya@gmail.com");
console.log(pobj);

//question-2
//Create a new class called Admin which inherits from User. add a new method called editData to Admin that allows it to edit website data.
let data = "allow user access";
class User{
    constructor(name,email){
        this.name=name;
        this.email = email;

    }
    viewData(){
        console.log("data = ", data);
    }
}
class Admin extends User{
    constructor(name,email){
        super(name,email)
    }
    editData(){
        data = "some new value"
    }
}


let admin =  new Admin("admin","admin@gmail.com");
//error handling
//try-cathch
try{
  ---normal code
}catch(err){//err is error object
---handling error
}
let a=5;
let b=4;
console.log("a=",a);
console.log("b=",b);
console.loh("a+b=",a+b);
console.loh("a+b=",a+c);// eske baad ka code run karega kyu ki yha error hai es problem ko dur karne ke liye error handling ka concept ata hai
console.loh("a+b=",a+b);
console.loh("a+b=",a+b);
console.loh("a+b=",a+b);
//solve error 
let a=5;
let b=4;
console.log("a=",a);
console.log("b=",b);
console.log("a+b=",a+b);

try{
    console.log("a+b=",a+c); 
}catch(err){
console.log(err);
}
console.log("a+b=",a+b);
console.log("a+b=",a+b);
console.log("a+b=",a+b);
