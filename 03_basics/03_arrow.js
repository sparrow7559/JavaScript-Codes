const user={
    username:"viraj",
    price:99,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage();
// user.username="sam";
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let usern='Viraj';
//     console.log(this.usern);
    
// }
// chai();

// const chai = function(){
//     let usern='Viraj';
//     console.log(this.usern);
// }

const chai = ()=>{
    let usern='Viraj';
    console.log(this);
}

// chai();

// const addtwo=(num1,num2)=>{
//     return num1+num2;
// }

// const addtwo=(num1,num2)=> num1+num2;

// const addtwo=(num1,num2)=> (num1+num2);

const addtwo=(num1,num2)=> ({username:"Viraj"});

console.log(addtwo(3,4));


const myArray = [2,5,3,7,6];

// myArray.forEach()