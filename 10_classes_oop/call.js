function setUsername(username){
    // complex DB calls 
    this.username=username;
}

function createUser(username,email,password){
    setUsername.call(this,username);

    this.email=email;
    this.password=password;


}

const vir = new createUser("viraj","Viraj@gmail.com",123);

console.log(vir);
