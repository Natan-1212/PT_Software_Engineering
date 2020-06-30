//Creating Hero Class with name, health ,weapon (object) attributes
class Hero {
    connstructor (name, health = 100) {
        this.name = name;
        this.health = health;
        this.weapons = {
            sprinkleSpray: 5,
            sugarShock: 10
        }
        //defining the catchPhrases using an  array
        this.catchPhrases =["i\'m fresher than day old pizza", 
        "you can\'t count my calories"]

    }
    //Creating Methods 

    talkSass() {
        for (let i = 0; i < this.catchPhrases.length; i++) {
            var rand = Math.floor(Math.random() * this.catchPhrases.length);
        }
        console.log(this.catchPhrases[rand]);
    }
    announceHealth() {
        console.log(this.health);
    }
    fight() {
        console.log("i\'m ready to rumble");
    }
}

//using this Hero class, create an instance of our hero Dougie the donut

const dougie = new Hero("Dougie the Donut", 100);
console.log(dougie);

//Creating Enemy Class

class Enemy {
    constructor(name, health = 100) {
        this.name = name;
        this.health = health;
        this.weapons = {
            pepperoniStars: 5,
            cheeseGrease: 10
        }
        this.catchPhrases = ['i\'m youtube famous',
        'i\'m more dangerous than an uncovered sewer']
    }
    talkSmack() {
        for (let i = 0; i < this.catchPhrases.length; i++) {
            var rand = Math.floor(Math.random() * this.catchPhrases.length);
        }
        console.log(this.catchPhrases[rand]);
    }
    announceHealth() {
        console.log(this.health);
    }
    fight() {
        console.log('i\'m gonna flatten you like a slice of pepperoni!');
    }
}
//Using this Enemy class, create an instance of the enemy Pizza Rat
const pizzaRat = new Enemy("Pizza Rat", 0);
console.log(pizzaRat);


//Walking Down the Street /But the fight part is where i am having the issue