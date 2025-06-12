function sayMyName(){
    console.log("V");
    console.log("I");
    console.log("R");
    console.log("A");
    console.log("J");
}

// sayMyName();

// function addTwoNum(num1,num2){
//     console.log(num1+num2);
    
// }
function addTwoNum(num1,num2){
    return num1+num2;
    
}

const result=addTwoNum(3,5);
// console.log(result);

function loginUserMsg(username="Sam"){
    if(undefined){
        console.log(("please enter a username"));
        return;
        
    }
    return `${username} just logged in`;
}
//  console.log(loginUserMsg("Viraj"));
//  console.log(loginUserMsg());

 function calcartprice(val1,val2,...num1){
        return num1;
 }

//  console.log(calcartprice(200,400,500));
 
const user={
    username:"Viraj",
    price:199
};

function handleobject(anyobj){
    console.log(`Username is ${anyobj.username} and the price is ${anyobj.price}`);
    
}

// handleobject(user); 
handleobject({
    username:'sam',
    price:399
}); 

const myNewArray=[200,400,100,600];

function returnSecVal(getArray){
    return getArray[1];
}

// console.log(returnSecVal(myNewArray));
console.log(returnSecVal([1,2,3,4]));
