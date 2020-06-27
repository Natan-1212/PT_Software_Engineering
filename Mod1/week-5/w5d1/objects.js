class Hamster {
    constructor (owner, name = "Natan", price = 20) {
        this.owner = owner;
        this.name = name;
        this.price = price;
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
