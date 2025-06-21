//fetch API---> application programming interface
//the fetch API provides an interface for fetching (sending/receiving) resources.
//It uses Request and Response objects.
//THe fetch() method is used to fetch a resource (data).
//fetch api ka kaam data bhejna and receive karna hai
let promise = fetch(URL,[options]);

const URL = "https://catfact.ninja/fact";

const getFacts = async() =>{
    console.log("getting data ......");
    let respose=await fetch(URL);
console.log(respose.status);
}

//understanding Terms
// AJAX is Asynchronous JS & XML ---> pahle jab hum request bhejte to o xml ke form me aa rha hota tha
// JSON is JAVAScript Object Notation---> generally ab data json format me ata hai
// json() method: returns a second promise that resolve with the result of parsing the response body text as JSON,output is JS object
//sabse pahle jab humne apne api ko request bheja to data response me json format me ata hai --> fir ese javaScript object ke andar convert karna hota hai
const URL = "https://catfact.ninja/fact";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async() =>{
    console.log("getting data ......");
    let respose=await fetch(URL);
console.log(respose);//json format
let data = await respose.json();
console.log(data.fact);
factPara.innerText = data.fact;// show data actual screen 
}

btn.addEventListener("click",getFacts);
//using html to showing data
<button id="btn">Get a fact</button>
    <p id="fact"></p>

const URL = "https://catfact.ninja/fact";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

// const getFacts = async() =>{
//     console.log("getting data ......");
//     let respose=await fetch(URL);
// console.log(respose);//json format
// let data = await respose.json();
// console.log(data.fact);
// factPara.innerText = data.fact;// show data actual screen 
// }
// above method is best but we can also use this
function getFacts(){
    fetch(URL)
    .then((response) =>{
        return response.json();
    })
    .then((data) =>{
        console.log(data);
        factPara.innerText =data.fact;
    })
}

btn.addEventListener("click",getFacts);

//requests & response
// HTTP verbs
// response status code ---> read about status code like 200,400,500...
//HTTP response headers also contain details about the response , such as content type HTTP status code etc.
//more read from MDN ---> get,post,put ....requests

//homeWork Task
//sending POst request

