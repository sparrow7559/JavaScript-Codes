const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(Math.PI);
// Math.PI=5;
// console.log(Math.PI);

// console.log(descriptor);

const vir ={
    name:'Viraj',
    id:123,
    isAvailable:true,
    order:function () {
        console.log("Code broke");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(vir,'name'));

Object.defineProperty(vir,'name',{
    // writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(vir,'name'));

for (const [key,value] of Object.entries(vir)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }

    
    
}