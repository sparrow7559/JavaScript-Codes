//Stack(primitive), Heap(Non-primitive)

let myName="viraj";
 
let anothername = myName;
anothername="name2";

console.log(anothername);
console.log(myName);

let user1={
    email:"user@google.com",
    upiId:"user@okhdfc",
}
let user2=user1;

user2.email="Viraj@google.com";
console.log(user1.email);
console.log(user2.email);

