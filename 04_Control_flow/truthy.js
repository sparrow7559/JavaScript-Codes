const userEmail = ["Viraj@google.com"];

if(userEmail){
    console.log("Got user email");
    
}else{
    console.log("Dont have user emails");
    
}

//falsy values

// false,0,-0,BigInt 0n,"",null,undefined,NaN

// truthy values 
// "0",'false'," ",[],{},function(){}

if(userEmail.length===0){
    console.log("Arrays is empty");
    
}

const emptyobj ={};

if(Object.keys(emptyobj).length===0){
    console.log("Object is empty");
    
}

//Nullish Coalescing Operator(??): null undefined

let val1;
// val1=5??10;
// val1=null??10;
// val1=undefined??15;
val1=null??10??20;

// console.log(val1);

//terniary operator

// condition ? true:false 

const iceTeaPrice =100;
iceTeaPrice <=80?console.log("less than 80"):console.log("More than 80");


