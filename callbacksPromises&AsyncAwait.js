//what this chapter is about?
//async await>> promise chains>>callback hell
//synchronous--->jo kaam pahle bola gya hai karne ko o pahle hi hoga 
// synchronous means the code runs in a paticular sequence of instructions given in the program . each instruction waits for the previous instruction to complete its execution.
console.log("one");
console.log("two");
console.log("three");
//asynchronous--> esme agar koi beech wali instruction execute hone me thoda time le rhi hai to uske baad wali instruction wait kyu kare esliye asynchroun programming ka use kiya jata
//due to synchronous programming , sometimes imp instruction get blocked dur to some previous instruction, which causes a delay in the UI. Asynchronous code execution allows to execute next instruction immediatly and doesn't block the flow.
function hello(){
    console.log("hello");
}
setTimeout(hello,4000);//timeout


setTimeout( ()=>{
console.log("hello");
},4000);


// pahle ki do statement run ho jayengi but fir 4 second ka wait rahega fir uske baad uske baad ki statement run hongi es probblem ko dur karne ke liye hi asynchronous ka use karte hai
console.log("one");
console.log("two");
//setTime ek asynchronous function esse yah hoga ki mera baki code run ho jayega aur 4s baad setTime out wala run ho jayega parallally 

console.log("one");
console.log("two");

setTimeout( ()=>{
console.log("hello");
},4000);

console.log("three");
console.log("four");
setTimeout( ()=>{
console.log("hello");
},4000);

console.log("three");
console.log("four");
//callBacks
// A callback is function passed as an argument to another function

function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumCallback){
    sumCallback(a,b);
}
//calculator(1,2,sum());//it will show error
calculator(1,2,sum);
//Callback Hell
//Callback Hell: Nested callbacks stacked below one another forming a pyramid structure.(pyramid of Doom).
//this style of programming becomes difficult to understand & manage.
//nesting
let age =19;
if(age>18){
    if(age>=60){
        console.log("senior");
    }else{
        console.log("middle");
    }
}
    else{
        console.log("child");
    }
// we have also nexting loop
for(let i=0;i<5;i++){
    let str="";
    for(let j=0;j<5;j++){
        str = str +j;
    }
    console.log(i,str);
}

function getData(dataId){
    setTimeout(()=>{
        console.log("data",dataId);
    },2000);
}
//this part is complex so repeat atleast two or three times
//data1 then s baad
//data2 then 2s baad
//data2 
//in real example me jaise ki hum pahle username check kate fir password check karte hai 
function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log("data",dataId);
     if(getNextData){
        getNextData();
     }
    },2000);
}

getData(1,() =>{
    getData(2)
});


//data1 then s baad
//data2 then 2s baad
//data3 then 2s baad
//data4
function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log("data",dataId);
     if(getNextData){
        getNextData();
     }
    },2000);
}

getData(1,() =>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4);
        });
    });
});


//data1 then s baad
//data2 then 2s baad
//data3 then 2s baad
//data4
function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log("data",dataId);
     if(getNextData){
        getNextData();
     }
    },2000);
}

//callback hell
getData(1,() =>{
    console.log("getting data2 ....")
    getData(2,()=>{
        console.log("getting data3.....")
        getData(3,()=>{
            console.log("getting data....");
            getData(4);
        });
    });
});
//callback hell ko remove karne ke liye hi promises ka use kiya jata 🤝🏻
//promise is for "eventual" completion of task. It is an object in JS. It is a solution to callback hell.
let promise = new Promise((resolve,reject)=>{....})
//resolve & reject are callbacks provided by JS

let promise = new Promise((resolve,reject)=>{
    console.log("I am a promise");
   // resolve(); may be give value or may not
    //resolve("success");//created ny internally javascipt
   // reject(); //similarly like resolve created by js
    //also we can write for any error 
    reject("some error");// it print error in console 
})// resove and reject ek sath call nhi kiye ja skte
//in promise we have three state--> pending,fulfilled(resolved),rejected


//promises
//A javaScript Promise object can be :
//Pending : the result it Undefined
//Resolved:the result is a value(fullfilled) resolve(result)
//Rejected: the result is an error object reject(error)

//promise has state (pending , fullfilled )& some result(result for resolve & error for reject).

function getData(dataId, getNextData){
    return new Promise((resolve,rejected) =>{
         setTimeout(() =>{
            console.log("data",dataId);
            resolve("success");
            if(getNextData){
                getNextData();
            }
         },5000);
    });
}

function getData(dataId, getNextData){
    return new Promise((resolve,reject) =>{
         setTimeout(() =>{
            // console.log("data",dataId);
            // resolve("success"); // agar koi error aa jaye tab 
            reject("error");
            if(getNextData){
                getNextData();
            }
         },5000);
    });
}
//how to use promises--->promise ya reject ho jaye ya fullfill ho jaye 
.then() & .catch()
promise.then((res)=>{...})
promise.catch((err))=>{..})

const getPromise = () =>{
   return new Promise((resolve,reject)=>{
        console.log("I am a Promise");
        // resolve("suject");
        reject("error");
    });
};
let promise = getPromise();
promise.then((res) =>{
console.log("promise fullfilled",res);
})

promise.catch((err) =>{
    console.log("rejected",err);
})

//promise chain

function asyncFunc(){
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
            console.log("some detail");
            resolve("success");
        },4000);
    });
}
console.log("fetching data1");
let p1 = asyncFunc();
p1.then((res)=>{
    console.log(res);
})

function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
            console.log("data1");
            resolve("success");
        },4000);
    });
}
console.log("fetching data1.....");
let p1 = asyncFunc1();
p1.then((res)=>{
    console.log(res);
})


function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
            console.log("data2");
            resolve("success");
        },6000);
    });
}
console.log("fetching data2.....");
let p2 = asyncFunc2();
p2.then((res)=>{
    console.log(res);
})
//above code is not good for data chaining
// es code me pahle first data print hoga uske baad second data print hoga

function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
            console.log("data1");
            resolve("success");
        },4000);
    });
}

function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
            console.log("data2");
            resolve("success");
        },4000);
    });
}
console.log("fetching data1.....");
let p1 = asyncFunc1();
p1.then((res)=>{
    console.log(res);
    console.log("fetching data2.....");
    let p2 = asyncFunc2();
    p2.then((res) =>{
        console.log(res);
    })
})
function getData(dataId){
    return new Promise((resolve,reject) =>{
         setTimeout(() =>{
            console.log("data",dataId);
            resolve("success"); 
         },2000);
    });
}
//this is actual promise chain
getData(1)
.then((res) =>{
    return getData(2);
})
.then((res) =>{
    return getData(3);
})
.then((res) =>{
    console.log(res);
});
//it is better than previous 
//promise chain v diffucult to understand hota hai esliye hum ek label upar jakar sheekhte hai which is async& await
//Async-Await
//async function always return a promise
async function myFun(){..}
//await pauses the execution of its surroundig asynce function until the promise is settled
//await keyword ko kisi async function ke andar hi use kar skte hai 
function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);
        },2000);
        
    });
}

async function getWeatherData(){
    await api();
}
function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);
        },2000);
        
    });
}
// agar hame 2 baar call lagani ho to
async function getWeatherData(){
    await api();//ist call
    await api();//2nd call
// }
//this very easy to unserstand 
function getData(dataId){
    return new Promise((resolve,reject) =>{
         setTimeout(() =>{
            console.log("data",dataId);
            resolve("success"); 
         },2000);
    });
}
async function getAllDta(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
    await getData(6);
}

//jaha async-await use hota hai wha .then() & .catch() use nhi hota hai
// async- await me jo hum function ko call kar rhe hai esse v bachne ka ek treeka hota hai
IIFT:Immediately Invoked Fuction Expression
  //IIFE is a function that is called immediately as soon as it is defined.
//this is part of advance javascript 
1 way to define :- 
  (function(){
    //...
  })();
  2nd way of defining :
  (() =>{
    //...
  })();

3 way of defining:
(async () =>{
  //...
})();
  function getData(dataId){
    return new Promise((resolve,reject) =>{
         setTimeout(() =>{
            console.log("data",dataId);
            resolve("success"); 
         },2000);
    });
}
(async function (){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
    await getData(6);
})();// ab ye code apne aap run ho jayega esko call nhi karna padega
