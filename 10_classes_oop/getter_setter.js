class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email=value;
    }

    get password(){
        return `${this._password}viraj`
    }

    set password(value){
        this._password=value;
    }
}

const viraj = new User("v@viraj.ai","abc");
console.log(viraj.email);
