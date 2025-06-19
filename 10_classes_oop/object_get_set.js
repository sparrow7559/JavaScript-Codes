const User ={
    _email:'viraj@gmail.com',
    _password:"abc",

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email=value;
    }
}

const vir = Object.create(User);
console.log(vir.email);
