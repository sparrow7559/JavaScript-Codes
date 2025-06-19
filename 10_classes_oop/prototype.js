let myName="Viraj            ";

// console.log(myName.truelength);

let myHeros=["thor",'spiderman'];

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spidy Power is ${this.spiderman}`);
    }

}

Object.prototype.viraj=function(){
    console.log(`Viraj is present in all objects`);
    
}

Array.prototype.heyViraj=function(){
    console.log("Viraj Says hello");
    
}

// heroPower.viraj();

// myHeros.viraj();
// myHeros.heyViraj();
// heroPower.heyViraj();

// inheritance

const User={
    name:"Viraj",
    email:"viraj@gmail.com"
}

const teacher = {
    makeVideo:true
}

const teachingSupport={
    isAvailable:false
}

const TASupport = {
    makeAssignment:"JS assignment",
    fullTime:true,
    __proto__:teachingSupport
}

teacher.__proto__=User;

//modern Syntax
Object.setPrototypeOf(teachingSupport,teacher);

let anotherUsername="Viraj       ";

String.prototype.truelength=function(){
    console.log(`${this}`);
    console.log(`True lenght is ${this.trim().length}`);
}

anotherUsername.truelength();
"Icetea".truelength();
