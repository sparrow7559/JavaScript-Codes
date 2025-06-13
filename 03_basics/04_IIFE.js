//Immediately invoked function expression

(function chai(){
    console.log("DB Connected");
    
})();

( (name)=>{
    console.log(`DB Connected two ${name}`);
    
})("Viraj");