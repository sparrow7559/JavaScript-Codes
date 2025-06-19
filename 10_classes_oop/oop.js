const user={
    username:"Viraj",
    loginCount:8,
    signedIn:true,

    getUserDetails:function(){
        // console.log("Got user details from DB");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
        
        
    }

}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;


    this.greeting=(()=>{
        console.log(`Welcome: ${this.username}`);
        
    })
    // return this;
}

const userOne= new User("Viraj",8,true);
const usertwo=new User("Javascript",7,false);
console.log(userOne.constructor);
// console.log(usertwo);
