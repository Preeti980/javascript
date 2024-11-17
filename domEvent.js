let para = document.createElement('p');
para.innerText = "clicked";

let btn = document.querySelector('button');
console.log(btn);
btn.addEventListener("click",()=>{
    btn.disabled = true;
    btn.innerText = "Clicked!";
    btn.style.backgroundColor = "red";
    btn.style.color = "white";
    btn.style.cursor = "not-allowed";
    document.body.append(para);
    console.log("button clicked")
})

btn.addEventListener("click",(evt)=>{
    para.remove();
    btn.disabled = false;
    btn.innerText = "Click Me!";
    btn.style.backgroundColor = "green";
    btn.style.color = "white";
    btn.style.cursor = "pointer";
    console.log("paragraph removed")
    console.log(evt)//print a object 
    console.log(evt.type)//output-> click
})

btn.removeEventListener("click",()=>{
    console.log("Button unclicked")
})

//change color light and dark
let modeBtn = document.querySelector("#mode");
let currMode = "light";
console.log(modeBtn)
modeBtn.addEventListener("click",()=>{
    if(currMode === "light"){
        document.body.style.backgroundColor = "pink";
        document.body.style.color = "yellow";
        currMode = "dark";
    }else{
        document.body.style.backgroundColor = "yellow";
        document.body.style.color = "pink";
        currMode = "light";
    }
    console.log(currMode)
})
