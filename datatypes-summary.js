//Primitive 

// 7 types: String,Number,Boolean,Null,Undefined,Symbol,BigInt

const score =100;
const scoreValue =100.3;
const islogin=false;
const outsideTemp = null;
let useremail;

const id = Symbol('123');
const anotherId = Symbol("123");
console.log(id===anotherId);

const bigNUmber = 51651652132133n;
console.log(typeof bigNUmber);


//Reference (non primitive):
//array,objects,functions

const heros = ["Shaktiman","ironman","cap"];

let myobj = {
    name:"Viraj",
    age:19,
}

const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof myFunction);
console.log(typeof heros);
