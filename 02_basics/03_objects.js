//singleton
// Object.create

//object literals

const mySym = Symbol("Key1");


const JsUser = {
    name:"Viraj",
    "Full name":"Viraj Gupta",
    [mySym]:"Mykey1",//[]for symbol
    age:19,
    loc:"Bhopal",
    email:"Viraj@gmail.com",
    isLoggedIn: true,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser['email']);
// console.log(JsUser['Full name']);
// console.log(JsUser[mySym]);

JsUser.email = 'viraj@google.com';
// Object.freeze(JsUser);
JsUser.email = 'viraj@microsoft.com';
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JsUser");
    
}
JsUser.greetingtwo = function(){
    console.log(`Hello JsUser, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());







