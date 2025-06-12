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
 console.log(loginUserMsg("Viraj"));
 console.log(loginUserMsg());

 
