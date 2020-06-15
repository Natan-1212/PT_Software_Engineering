 ////////////////////PART ONE///////////////
 //////////// Ranking My Comfort with HTML and CSS video contents//////
 /////HTML Intro /////// 5 - I got this!///////
 //////HTML Elements/////4 -feel pretty good ,need some extra review///
 //////HTML CSS Intro/////5-I got this!/////////
 /////CSS Basics /////////4--feel pretty good ,need some extra review///

///////////////////PART TWO-JavaScript Reps //////////////////////////

////////Easy Goinng ////////

/*for(let i = 1; i <= 20; i++){
    console.log(i);
} 

//////// Get Even /////////

for (let i = 0; i <= 200; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

////////// Fizz Buzz //////////////

for( let i = 1; i <= 100;i++)
if(i % 3 === 0 && i % 5 === 0) {
    console.log('Fizz Buzz', i);
}
else if (i % 3 === 0){
    console.log('Fizz', i);
}
else if( i % 5 === 0){
    console.log ('Buzz', i);
} 
To make Fizz Buzz more elegant 

for( let i = 1; i <= 100;i++)
if(i % 15 === 0) {
    console.log('Fizz Buzz', i);
}
else if (i % 3 === 0){
    console.log('Fizz', i);
}
else if( i % 5 === 0){
    console.log ('Buzz', i);
} 

///////////// Wild Wild Life//////////////////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"] 

///change Plantee's array to reflect her being a year older/////

const plantee = ["Plantee", "plant",  5000 , "Mordor"]
plantee.splice(2,1, 500 + 1)
console.log(plantee);

///////Change Wolfy's hometown from "Yukon Territory" to "Gotham City///

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
wolfy[3] = 'Gothom City'
console.log(wolfy);

///////Give D'Art a second hometown by adding "Hawkins"//////

const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"] 
dart.unshift("Hawkins");
console.log(dart); 

////////Remove "Wolfy" from the wolfy array and replace it with "Gameboy"/////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
wolfy.splice(0, 1, "Gameboy")
console.log(wolfy);

/////////Yell at the Ninja Turtles//////////////

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
for(let i = 0; i < ninjaTurtles.length; i++) {
    ninjaTurtles[i] = ninjaTurtles[i].toUpperCase();
    console.log(ninjaTurtles);
}

//////////Methods, Revisited /////////////////

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 
'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian',
 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 
 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
 console.log(favMovies.indexOf('Titanic'));
 favMovies.sort(); //sorts the elemnts of the array in plcae and returns the sorted array
 console.log(favMovies);
 console.log(favMovies.pop());
console.log(favMovies.push('Guardians of the Galaxy'));
favMovies.reverse();
console.log(favMovies);

favMovies.reverse();
console.log(favMovies.shift());

console.log(favMovies.indexOf('Django Unchained'));
favMovies.splice(3,1, 'Avatar');
console.log(favMovies);

console.log(favMovies.indexOf('Fast and Furious'));
console.log(favMovies.slice(9));// deviding the lists of the array after the half-way*/

////////// Where is Waldo?///////////////////////////

/*const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
console.log(whereIsWaldo.indexOf("Eggbert"));
whereIsWaldo.splice(1,1);
console.log(whereIsWaldo);
console.log(whereIsWaldo.indexOf("Neff"));

console.log(whereIsWaldo.splice(2[2]),1, "No One");// gave me an error 

console.log(whereIsWaldo.splice([2][2], 1, "No One"));//optional but gave me an error 

console.log (whereIsWaldo[3][1][1]);

/////////// Excited Kitten  //////////////////////

for (let i = 0; i < 20; i++){
    console.log("Love me, pet me! HSSSSSS!");
}
 
const catMessageArray = [
	"...human...why you taking pictures of me?...", 
	"...the catnip made me do it...", 
	"...why does the red dot always get away..."
	]

for (let i = 1; i <= 20; i++) {
	console.log(catMessageArray);
	if (i % 2 === 0) {
		let rand = Math.floor(Math.random()*3);
		console.log(catMessageArray[rand])
	}
}

const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18,12, 17, 12, 71, 18, 15, 12];
const numsSorted = nums.sort();

if (numsSorted.length % 2 === 1) {
	console.log(The median of the array is ${numsSorted[Math.floor(numsSorted.length / 2)]}'); //finds median of array with odd number of elements
} else { 
	console.log(`The median of the array is ${(numsSorted[numsSorted.length/2] + numsSorted[(numsSorted.length/2) - 1])/2}); //finds median of array with even amount of elements 
}*/ // gave me a syntax error and unable to find the median 

////////////Return of the Closets /////////////////
 
/*const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
  
  const kristynsShoe = kristynsCloset[0];
  kristynsCloset.shift();
  //checking to make sure shoe is out of kristynsCloset
  console.log(kristynsCloset);
  thomsCloset[2].push(kristynsShoe);
  console.log(thomsCloset[2]);

  /////Dirty Laudary/////////

 for (i = 0; i < kristynsCloset.length; i++) {
      thisList = kristynsCloset[i];
	console.log('WHIRR: Now washing ' + thisList);
}

///////////Inventory////////////////

for (i = 0; i < thomsCloset.length; i++) {
    console.log(thomsCloset[i]);
}*/
const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18,12, 17, 12, 71, 18, 15, 12];
const sortedNums = nums.sort();
let median = sortedNums.length/2;
median = Math.floor(median);
console.log(sortedNums[median]);











