function multipllyby5(num) {
    return num*5;
}

multipllyby5.power=2;
console.log(multipllyby5(3));
console.log(multipllyby5.power);
console.log(multipllyby5.prototype);

function createUser(username,score){
    this.username=username;
    this.score=score;

}

createUser.prototype.increment=function(){
    this.score++;
}

createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`);
};

const chai =new createUser("chai",25);
const tea = new createUser("tea",250);

chai.printMe();