class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email,password) {
        super(username);
        this.email=email;
        this.password=password;
    }

    addCourse(){
        console.log(`A new Course was added ny ${this.username}`);
        
    }
}

const vir = new Teacher("Viraj","Viraj@gmail.com",'123');

vir.addCourse();

const vir2 =new User("Virju");

vir2.logMe();
vir.logMe();

console.log(vir instanceof Teacher);
