// if
const isUserLoggedIn=true;

if(isUserLoggedIn){

}
if(3!=2){

}
if(2==="2"){
    console.log("Executed");
    
}

// const temp=46;

// if(temp<50){
//     console.log("Temp is less than 50");
    
// }
// else{
//     console.log("temp more than 50");
    
// }

// <,>,<=,>=,==,===,!=



// const score =200;

// if(score>100){
//     const power="Fly";
//     console.log(`User power ${power}`);
    
// }
    // console.log(`User power ${power}`);//error


// const balance=1000;
// // if(balance>500)
// //     console.log("Test");
    
// if(balance<500){
//     console.log("Less than 500");
    
// }
// else if(balance<750){
//     console.log("Less than 750");
    
// }
// else{
//     console.log("less than 1200");
    
// }

const UserLoggedIn=true;
const debitCard=true;
const loggedInFromGoogle=false;
const loggedInFromEmail=true;

if(UserLoggedIn&&debitCard){
    console.log("Allowed to buy");
    
};
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("Logged in");
    
}