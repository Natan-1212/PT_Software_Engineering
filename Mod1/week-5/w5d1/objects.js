
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
//const natan = new Hamster("Linda","Natan");
//console.log(natan.getPrice());

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
        console.log("How awesome to see you!," + this.name);
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
       // this.bankAccount = this.bankAccount - this.hamster.getPrice();
    }
}
////Create a Story with your Person class/////
//1-Instantiate a new Person named Timmy
const timmy = new Person ('Timmy');
//console.log(timmy);

//2-Age Timmy five years
//timmy.age(5);
//console.log(timmy);

//3-Have him eat five times.
timmy.eat(5);  
//console.log(timmy); 

//4-Have him exercise five times
timmy.exercise(5);
//console.log(timmy);


//5-age timmy 9 years
timmy.ageUp(9);
//console.log(timmy);

//6-8Create a hamster named "Gus" and buy Gus
const gus = new Hamster('Timmy', 'Gus');
timmy.buyHamster(gus);
//console.log(timmy);

//9-age timmy 15 yrs
timmy.ageUp(15);
//console.log(timmy);

//10-Have Timmy eat twice
timmy.eat(2);


//11-Have Timmy eat twice
timmy.exercise(2);

//Testing the object Timmy provides a working function when i used it without 
//timmy.age(2nd) part otherwise it is provides me an error saying "timmy.age is not a function"
console.log(timmy);
