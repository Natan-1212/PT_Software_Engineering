/////Combine objects, arrays, and functions/////

/*1-Create an object, called crayonBox, that has a property that is an array. 
The array should have the names of some crayons. 
Log one of the elements of that array.

const crayonPicker = (color) => {
    const crayonBox = {
        colors: ['red','green','blue','yellow','black']
    };
    return crayonBox.colors[color];
}; 
console.log(crayonPicker(1));// result = success =>green

2-Create an object bottle that has a property that is an object: cap. 
cap can have properties like material: 'metal' or 'plastic', color: blue or white etc.
 Log one of the properties of that inner object.
const bottle = {
    cap:{
        material:['metal','plastic','glass'],
        color:['blue','red','white','green', 'grey'],
        size:['small','medium','large', 'extra-large']
    }
}
console.log(bottle.cap.material[2]); // result=success =>glass
console.log(bottle.cap.size);  // result = success =>[ 'small', 'medium', 'large', 'extra-large']


3-Create an array called receipt that has at least one object in it. 
The inner objects should be items that have a name and a price. 
Log one of the properties of that inner object.

const receipt = [
   desktop = {
        name: 'IMac', 
        price:'$1,290' },
    television = {
        name:'Samsung',    
        price:'$960'
    }
];
console.log(receipt[1].name); // result=success =>Samsung 

4-Create an array called apartmentBuilding that has an array as one of its elements, 
the inner array should be the names of the tenants. Log one of the elements of the inner array

let apartmentBuilding = [
    namesOfTenants = ['Natan', 'Motasam', 'Angel','Jose', 'Hector']
];
console.log(apartmentBuilding[0][0]); // result=success => Natan 


////Combine objects, arrays, and functions more than one level deep/////

1-Create a function knit that returns an object that has the following kinds of properties item:
 scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property 
on the return value).

const knit = () =>{
    knitObject = {
        item: 'scarf',
        size: '6ft'
    }
    return knitObject;
}
console.log(knit(1).item);//// result= success =>scarf

2-Create a function crayonSelector that returns an object that 
has an array (you can reuse your crayonBox object). Log one of the elements of 
that array.

const crayonSelector= (color) => {
    const crayonBox = {
        colors: ['red','green','blue','yellow','black']
    };
    return crayonBox.colors[color];
}; 
console.log(crayonSelector(3));// result = success =>yellow 

3-Create a function powerButton that returns a function called options

const powerButton = () => {
    const options = () => {
        console.log('select a song')
    }
    options()
}
powerButton(); // result= success => select a song 

/////Model a Vending Machine Model a vending machine//////

const vendingMachine = {
    snacks: [
        {name: "chips", price: "$1.75"},
        {name: "gum", price: "$0.50"},
        {name: "chocolate bar", price: "$0.75"}
    ],
    vend: function (vendingMachine, snack) {
        return vendingMachine.snacks[snack];
    }

};
console.log(vendingMachine.vend(vendingMachine,(0))); //result = success => 
{ name: 'chips', price: '$1.75' }
//1-Make a function add that takes two arguments (numbers) and sums them together

let add = (num1,num2) => {
    let sum =  num1 + num2;
    return sum;
};


// 2-Make a function subtract that takes two arguments (numbers) and subtracts them

let subtract = (num1,num2) => {
    return num1 - num2;
};
// 3-Make a function multiply that takes two arguments and multiplies them

let multiply = (num1,num2) => {
    return num1 * num2;
};

// 4-Make a function divide that takes two arguments and divides them

let divide = (num1,num2) => {
    return num1 / num2;
};

// 5-7
let calculate = (num1,num2,operate) => {
    return operate(num1,num2);    
}
// calulations
console.log("\n"+calculate(1,2,add));
console.log("\n"+calculate(15,5,subtract));
console.log("\n"+calculate(5,5,multiply));
console.log("\n"+calculate(30,5,divide)); 


/////Function definition placement///
//(Clean up this code, so that it works and has function definitions in the correct place)

const bar = () => {
    console.log("bar here");
}
bar();

const foo = () => {
    console.log("foo here");
}
foo();*/

////Error reading//////
//What is meant by the error(s) this produces?/////

/*foo();

const foo ()=>{
    console.log('hi');
}
//The error message I got when i run the function was"Missing initializer in const declaration"
//This is caused by the code trying to call the function before the
//function has been defined or declared. 


///Section 3 Array Methods with Callbacks/////

//1-Determine if every number is greater than or equal to 0

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagrams = [ 'The','job', 'requires', 'extra', 'pluck', 'and', 'zeal', 'from', 'every', 'young', 'wage', 'earner',  'Quick', 
    'zephyrs', 'blow,', 'vexing', 'daft', 'Jim', 'Two', 'driven', 'jocks', 'help', 'fax', 'my', 'big',
  'quiz', 'Five', 'quacking', 'zephyrs', 'jolt', 'my', 'wax', 'bed', 'The', 'five', 'boxing', 'wizards', 'jump', 'quickly', 'Pack',
  'my', 'box', 'with', 'five', 'dozen', 'liquor', 'jugs', 'We', 'promptly', 'judged', 'antique', 'ivory', 'buckles', 'for', 'the',
  'next', 'prize', 'Jaded', 'zombies', 'acted', 'quaintly', 'but', 'kept','driving','their','oxen','forward' ]

//EVERY
/8* //1-Determine if every number is greater than or equal to 0
let overZero = (num) => nums => 0;
let allOverZero = (numArr) => {
    return numArr.every(overZero);
}
console.log(allOverZero(nums));//// Result = Success =>True 

2-Determine if every word shorter than 8 characters

let shorterThanEight = (word) => word.length < 8;
let allShorterThanEight = (wordArr) => {
    return wordArr.every(shorterThanEight);
};
console.log(allShorterThanEight(panagrams));

//FILTER
//1-filter the array for numbers less than 4

let lessThanFour = (num) => num < 4;
let filterLessThanFour = (numArr) => {
    return numArr.filter(lessThanFour);
};
console.log(filterLessThanFour(nums));

//2-filter words that have an even length

let evenLength = (word) => word.length % 2 === 0;
let filterEvenLength = (wordArr) => {
    return wordArr.filter(evenLength);
};
console.log(filterEvenLength(panagrams));

//FIND
//1-Find the first value divisible by 5
let divisibleByFour = (num) => num % 4 === 0;
let findDivisibleByFour = (numArr) => {
    return numArr.find(divisibleByFour);
};
console.log(findDivisibleByFour(nums));

//2-find the index of the first word that is less than 2 characters long 

let longerThanFive = (word) => word.length > 5;
let findLongerThanFive = (wordArr) => {
    return wordArr.find(longerThanFive);
};
console.log(findLongerThanFive(panagrams)); 

////MAP/////
//1-make a new array of each number multiplied by 100

let multiplyByOneHundred = (num) => num * 100;
let mapByOneHundred = (numArr) => {
    return numArr.map(multiplyByOneHundred);
};
console.log(mapByOneHundred(nums));

//2-make a new array of all the words in all uppercase

let makeUpperCase = word => word.toUpperCase();
let mapToUpperCase = wordArr => {
    return wordArr.map(makeUpperCase);
};
console.log(mapToUpperCase(panagrams));

///SOME////
//1-Find out if some numbers are divisible by 7

let divisibleBySeven = (num) => num % 7 === 0;
let someDivisibleBySeven = (numArr) => {
    return numArr.some(divisibleBySeven);
};
console.log(someDivisibleBySeven(nums));

//2-Find out if some words have the letter a in them

let wordHasA= (word) => {
    for (let = 0; i < panagramsArr.length; i++);
    if (charPanagramsArr[i] === "a") {
        return true;
    }

} */



