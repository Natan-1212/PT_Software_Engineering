
//////Hamster///////////
class Hamster {
    constructor (owner, name = "Natan", price = 20) {
        this.owner = owner;
        this.name = name;
        this.price = price;
        this.price = 20;
    }
    wheelRun() {
        console.log("squeak squeak");
    }
    eatFood() {
        console.log("nibble nibble");
    }
    getPrice(){
        return this.price;
    }
}
const natan = new Hamster("Linda","Natan");
console.log(natan.getPrice());

/////Person///////

class Person {
    constructor (name) {
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0; 
        this.hamster = [];
        this.bankAccount = 0;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getWeight() {
        return this.weight;
    }

    greet() {
        console.log("So good to see you, " + this.name);
    }

    eat() {
        this.weight++;
        this.mood++;
    }

    exercise() {
        this.weight--;
    }
    ageUp() {
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount++;
    }

    buyHamster(name) {
        this.hamster.push(new Hamster(name));
        this.mood +=10;
        this.bankAccount = this.bankAccount - this.hamster.getPrice();
    }
}



