//Event in js
// the change in the state of an object is known as an event
//events are fired to notify code of "interesting changes" that may affect code execution.
//mouse event(click,double click etc.)
//keyboard event(keypress, keyup, keydown)
//form events(submit etc.)
//print event & may more
    <!-- in line event handling -->
<button onclick="console.log('button was clicked')">click me</button>
<button ondblclick="console.log('button was clicked 2 times')">click me 2 times</button>
<div onmouseover="console.log('you are inside div')">
     this is my box
</div>

// in js how to write event
node.event = () =>{
  //handle here
}
let btn1 = document.querySelector("#btn1");
console.log(btn1.innerText);

btn1.onclick = () =>{
    console.log("button first was clicked");
}
btn1.style.backgroundColor ="red";
btn1.style.color = "white";
// kon sa code run karega html inline js or js wala code
<div onmouseover="console.log('you are inside div')">

  let div = document.querySelector("div");
div.onmouseover = () =>{
  console.log("this is javascript code");
}
div.onmouseover = () =>{
  console.log("this is javascript code");
}// agar esko 2 baar run karna chahe to v nhi hoga
// finally we get run javascript code

//event object
//it is a special object that has details about the event 
//All event handlers have access to the event object's properties and methods
node.event =(e) =>{
  //handle here
}
//e.target, e.type, e.clientX,e.clientY
let btn1 = document.querySelector("#btn1");
console.log(btn1.innerText);

btn1.onclick = (e) =>{
   console.log(e);// o/p -->PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}

   console.log(e.type);//o/p --> click
   console.log(e.target);//o/p --> <button id="btn1" style="background-color: red; color: white;">click me</button>
   console.log(e.clientX,e.clientY);//o/p--> 41 16
}
//event listeners
node.addEventListener(event,callback)
node.removeEventListener(event,callback)
//Node: the callback reference should be same to remove
// inline handling ka drawback hai ki usko kewal html me likh skte hai 
// js handling ka drawback hai ki ek baar me ek hi event handle kar skte hai esliye hum event listener ka use karte hai
//ek event ke lie hum multiple event listner create kar skte hai

<button id="btn1" onclick="console.log('hello priya')">click me</button>// one event handelar here 
let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () =>{
    console.log("button one was clicked");
})// dono ek sath run ho rhe hai
btn1.addEventListener("click", () =>{
    console.log("button two was clicked");
}); // we can run two time or more than two

//also we can print an object
btn1.addEventListener("click", (e) =>{
    console.log("button two was clicked");
    console.log(e);
});
let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", () =>{
    console.log("button  one was clicked");
});
btn1.addEventListener("click", () =>{
    console.log("button two was clicked");
});
btn1.addEventListener("click", () =>{
    console.log("button three was clicked");
});
//also we can print an object
btn1.addEventListener("click", () =>{
    console.log("button four was clicked");
 
});
btn1.removeEventListener("click", () =>{
    console.log("button three was clicked");
 
}); // jab ese delete karenge hoga nhi kyu ki memory me 2 alag function hai esliye 
// pahle function ko ek alag variable me store karenge tab usko remove karenge
let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", () =>{
    console.log("button  one was clicked");
});
btn1.addEventListener("click", () =>{
    console.log("button two was clicked");
});
let handler3 = () =>{
    console.log("button three was clicked");
}
btn1.addEventListener("click", handler3);
//also we can print an object
btn1.addEventListener("click", () =>{
    console.log("button four was clicked");
 
});
btn1.removeEventListener("click", handler3);// ab delete ho jayega 
//practice question
//qs. create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.
<button id="mode">change mode</button>
let modeBtn = document.querySelector("#mode");
let currMode = "light";//dark
modeBtn.addEventListener("click",()=>{
if(currMode === "light"){
    currMode="dark";
    document.querySelector("body").style.backgroundColor="black"
}else{
    currMode="light";
    document.querySelector("body").style.backgroundColor="white"
}
console.log(currMode);
});
//using css with classList
.dark{
    background-color: black;
    color: white;
}
.light{
    background-color: white;
    color: black;
}
let modeBtn = document.querySelector("#mode");
let currMode = "light";//dark
let body = document.querySelector("body");
modeBtn.addEventListener("click",()=>{
if(currMode === "light"){
    currMode="dark";
    body.classList.add("dark");
  body.classList.remove("light");
}else{
    currMode="light";
    body.classList.add("light");
      body.classList.remove("dark");
}
console.log(currMode);
});
