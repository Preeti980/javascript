// arrays ---> collections of items
let items = ['foo', 'bar','baz'];
let marks = [22,23,24,25];
let info = ["priti","priya",30,"preeti"];//we can store string and number at same time in array
console.log(items, marks,info);

console.log(items.length);//length property
//difference betwwen property and method
// property---> give some values and method ---> kuch kam karta hai

console.log(typeof items); // it always return an object

//arrays indices means indexs
console.log(items[0]); // output: foo
console.log(items[2]); // output: baz

// change values
items[0] = 'new_value';
console.log(items); // output: ['new_value', 'bar', 'baz']

//string ---> immutable in javascript and Arrays ---> mutable in javascript

//looping over arrays

for(let i = 0; i < items.length; i++){
    console.log(items[i]);
}

//for of loop
for(let item of items){
    console.log(item);
    // console.log(item.toUpperCase())
}
// for a given array with marks of strudent --> [85,97,44,37,76,60]
// fing the average marks of the entire class
let m = [85,97,44,37,76,60];
let sum =0;
for(let i =0; i<m.length;i++){
    sum += m[i];
  
}
console.log("Average marks of the class = "+sum/m.length);

//for a given array with prices of 5 items -> [250, 645 , 300 , 900, 50]
//all items have an offer of 10% off on item . change the array to store final price after applying offer
let its = [250, 645 , 300 , 900, 50];
for(let i = 0; i < its.length; i++){
    its[i] = its[i] - (its[i]*0.1);
}
console.log(its)

//arrays methods

//push(): add to end 
    its.push(700,800);
    console.log(its);

 //pop(): delete from end and return
 let poppedItem = its.pop();
 console.log(its, poppedItem)
 ;
 //toString():converts arrays to string
 let fooditems = ['apple', 'papaya','grapes','litchi'];
 console.log(fooditems)
 console.log(fooditems.toString());
 //join(): joins all elements of an array into a string
 console.log(its.join(','));

//unshift(): add to start
 its.unshift(100,200);
 console.log(its);

 //shift(): delete from start and return
 let shiftedItem = its.shift();
 console.log(its, shiftedItem);

 //concat(): joins multiple arrays & returns result
 let fruits = ['mango', 'orange'];
 let vegetables = ['potato', 'carrot'];
 let allItems = fruits.concat(vegetables);//
 console.log(allItems);//output  ['mango', 'orange', 'potato', 'carrot']

//splice(): adds/removes elements from an array
 its.splice(2,0,400,500); //start index, delete count, new element(s)
 console.log(its);

 its.splice(2,2); //start index, delete count
 console.log(its);//output  [200, 225, 580.5, 270, 810, 45, 700]

 //slice() : return a piece of the array
 let sliceItems = its.slice(1,4);//output [225, 580.5, 270]
 console.log(sliceItems);

 //reverse() : reverses the order of elements in an array
 its.reverse();
 console.log(its);

//sort() : sorts the elements of an array
 its.sort();
 console.log(its);
