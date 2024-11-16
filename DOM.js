//DOM (Document object model)
//Window Object
// The window object represents an open window in a browser . it is browser's object(not javascript's) & is automatically created by browser.
//it is a global object with lots of properties & method
console.log(window);
console.log("hello1");
window.console.log("hello2");
//output :hello1
//hello2


let heading = document.getElementById("hheading-class");
heading.innerText= heading.innerText+" from apna college "

let div = document.getElementsByClassName("box");
for(let i=0; i<div.length; i++){
    div[0].style.backgroundColor = "red";
    div[0].innerText="priya"
    div[1].style.backgroundColor = "green";
    div[1].innerText="Chauhan";
    div[2].style.backgroundColor = "yellow";
}

let div = document.getElementById("box1");
console.log(div);
let box = div.getAttribute("id");
console.log(box);

let newbtn = document.createElement("button");
newbtn.innerText="click me";
console.log(newbtn)

let div = document.getElementById("box");
div.append(newbtn)

let newbtn = document.createElement("button");
newbtn.innerText="click me!";
document.querySelector("body").prepend(newbtn);
newbtn.style.backgroundColor="green";
newbtn.style.color="white"

