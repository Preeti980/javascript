
//DOM-> document  object model
//window object
//the window object represents an open window in a browser. It is browser's object(not javaScript's) & is automatically created by browser.
// it is a global object with lots of properties & method
//DOM--> When a web page is loaded , the browser creates a Document Object Model(DOM) of the page
// javascript me hum apne sare html code ko access kar skte hai dom ki help se

console.log(window);// window ek object hai
console.log("hello");

window.console.log("hello2");//console.log window object ke andar hi hai
console.log(window.document);//show html code
console.log();// print karwane ke kaam ata hai
console.dir(); //document ki property and method ko print karwata hai
console.log(window.document);//document ko print karane ke liye eska use nhi karte hai
console.dir(window.document);//eska use karte hai document ko print karane ke liye
console.die(document);
console.dir(document.body);
console.log(document.head);


//html code
<div>
    <h1 id="heading1"> this is my heading</h1>
    <h2 class="heading2">this is my second heading </h2>
    <h2 class="heading2">this is my second heading </h2>
    <h3 class="heading2">this is my second heading </h3>
  <p>this is our first paragraph</p>
    <p>this is our second paragraph</p>
</div>
//js code 
//DOM Manipulation
//1- selecting with id
//document.getElementById("myId");
let heading = document.getElementById("heading1");
console.log(heading);//output --->h1#heading1

// 2- selecting with class
//document.getElementByClassName("myClass");
let headings = document.getElementsByClassName("heading2");
console.log(headings);//output --->HTMLCollection(3) [h2.heading2, h2.heading2, h3.heading2]
//3-selecting with tag
//document.getElementByTagName("p");
let paras = document.getElementsByTagName("p");
console.log(paras);//output--->  HTMLCollection(2) [p, p]
//query selector ---> [hum apni id , class, and tag v pass kar skte hai]

let firstElement = document.querySelector("p");//1st element
console.log(firstElement);// return first element --><p>this is our first paragraph</p>

let allEl = document.querySelectorAll("p");//for all element
console.log(allEl);// return a NodeList --->NodeList(2)

let firstclass = document.querySelector(".heading2");
console.log(firstclass);//output ---> <h2 class="heading2">this is my second heading </h2>
let allElement = document.querySelectorAll(".heading2");
console.log(allElement);//output-->NodeList(3) [h2.heading2, h2.heading2, h3.heading2]

//properties
//tagName:returns tag for element nodes
console.log(firstclass.tagName);//output -->h2
//innerText: return the text content of the element and all its children
console.log(firstclass.innerText); // output ---> this is my second heading
//innerHTML: returns the plain text or HTML contents in the element

//textContent:returntextual content even for hidden elements
let firstclass = document.querySelector(".heading2");
console.log(firstclass.innerText ="this is my updated text");
// homework problem --> learn from mdn about firstChild, lastChild, children  
// also know about text node , comment node and element node

//let's Practice
// 1- create a h2 heading with text  - " hello JavaScript". Append "from Apna College Student" to this text using JS.
<h2>Hello JavaScript</h2>
 let myh2 = document.querySelector("h2");
 console.log(myh2.innerText=myh2.innerText + " From apna College Student");// concatinate => output --> Hello JavaScript From apna College Student

//2- create 3 divs with common class name - "box". Access them & add some unique text to each of them. 
<div class="box">div1</div>
<div class="box">div2</div>
<div class="box">div3</div>
<script src="app.js"></script>

 let divs = document.querySelectorAll(".box");
 console.log(divs[0]);// it will access first div

 divs[0].innerText="changed div 1";
 divs[1].innerText="changed div 2";
 divs[2].innerText="changed div 3";
 // this not better way that way we use loop 
  let idx =1;
 for(div of divs){
    console.log(div.innerText = `new unique value ${idx}`);
    idx++;
 }
