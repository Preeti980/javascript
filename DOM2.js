 //attribute
 //getAttribute(attr)// to get the attribute value
 //setAttribute(attr,value);// to set the attribute val th

 let div = document.querySelector("div");
 console.log(div);
 let id = div.getAttribute("id");
 console.log(id);

 let name = div.setAttribute("name","newName");
console.log(name);

//style --> how to access and change 
//node.style
let div = document.querySelector("div");
console.log(div.style.backgroundColor="green");
div.style.fontSize="20px";// similary aproximate access or change all css property

//insert Elements
// it is two step process first of all create and then add
//for creating element
// let el = document.createElement("div");

let newBtn = document.createElement("button");
newBtn.innerText ="click me!";
console.log(newBtn);
// es button ko screen par show karne ke liye generally ye 4 method use kiye jate hai
node.append(el)//add at the end of node(inside)
node.prepend(el)//adds at the start of node(inside)
node.before(el)//adds before the node (outside)
node.after(el)//adds after the node (outside)
    //pahle humne button ko create kar liya hai javascript ki help se ab add karenge --> eske liye pahle div ko access karenge fir uske andar button ko add kar denge
    let div = document.querySelector("div");
div.append(newBtn);

   // div ke pahle button ko insert karne ke liye --> div.before(newBtn);
<div id="box" name="jsdiv">
       //button inserted here in output using prepend  --> div.prepend(newBtn);
    this is my div
    <ul>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
    </ul>
    //button inserted here in output using append---> div.append(newBtn);
</div>
// div ke baad button ko insert karne ke liye --> div.after(newBtn);


let heading = document.createElement("h1");
heading.innerHTML="<i>Hi, I am New User</i>"
document.querySelector("body").prepend(heading);

//delete element
node.remove();
let para = document.querySelector("p");
para.remove();
//home work read about appendchils(), and remove child()

//let's practice
//1-create a new button element . Give it a text "Click me" , background color of red & text color of white.
//insert the button as the first element inside the body tag
let btn = document.createElement("button");
btn.innerText="click me";
document.querySelector("body").prepend(btn);
btn.style.backgroundColor="red";
btn.style.color="white";

//2- create a <p> tag in html , give it a class & some Style . now create a new class in CSS and try to append this class to the <p> element.
//did you notice, how you overwrite the class name when you add a new one? solve this problem using classList.
<p class="content">I am a paragraph</p>
.content{
    color:red;
}
.new-class{
    background-color: yellow;
}
let para = document.querySelector("p");
para.getAttribute("class");
para.setAttribute("class","new-class")// override class that's why use classList
//para.setAttribute("class","new-class")// override class that's why use classList
para.classList.add("new-class");
