// var c=300;//global scope
let a =300;
if (true){
    let a =10;
    const b=20;
    // console.log("Inner: ",a);
    
}//block scope




// console.log(a);
// console.log(b);
// console.log(c);
 

function one(){
    const username ="Viraj";

    function two(){
        const website="Youtube";
        console.log(username);
        
    }
    // console.log(website);
    // two();
    
}
// one();

if(true){
    const username="viraj";
    if(username==="viraj"){
        const website="youtube";
        // console.log(username+website);
        
    }
    // console.log(website);//error
    
}
// console.log(username);//error

//++++++++++++++++++Interesting++++++++++++++

console.log(addone(5));


function addone(num){
    return num+1;

}


addtwo(5);

const addtwo=function(num){
    return num+2;
}

