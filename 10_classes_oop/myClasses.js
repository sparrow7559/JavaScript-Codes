class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    chaneUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const vir= new User("Viraj","Viraj@gmail.com",'123');

console.log(vir.encryptPassword());
console.log(vir.chaneUsername());
