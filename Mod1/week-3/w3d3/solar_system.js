/*const milkyWay = {
    type: "barred spiral",
    age: 13600000000,
    containsEarth: false
}
//console.log(milkyWay.containsEarth);
//milkyWay.containsEarth = true
//console.log(milkyWay);
milkyWay.numberOfStars = "100-400 billion"
console.log(milkyWay); */

const solarSystem = [
	{ name: "Mercury", ringSystem: false, moons: [] },
	{ name: "Venus", ringSystem: false, moons: [] },
	{ name: "Earth", ringSystem: false, moons: ["The Moon"] },
	{ name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },
	{ name: "Jupiter", ringSystem: true, moons: ["Europa", "Ganymede", "Io", "Callisto"] },
	{ name: "Saturn", ringSystem: true, moons: ["Titan", "Enceladus", "Rhea", "Mimas"] },
	{ name: "Uranus", ringSystem: true, moons: ["Miranda", "Titania", "Ariel", "Umbriel"] },
	{ name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] }
];
//for (let i = 0; i < solarSystem.name.length; i++) {
   // console.log(solarSystem.name[i]);

   //console.log(solarSystem[4].moons );
  // console.log(solarSystem.names[4].moons);
  //console.log(solarSystem[1].moons = ["Endor"]);
  //console.log(solarSystem[7].moons[1]);
  //console.log(solarSystem);


/*const moviesObj = {
    "L' Avventura":{director: "Michelangelo Antonioni", year: 1960},
    "Eraserhead": {director: "David Lynch", year: 1978},
    "Dayereh":{ director: "Jafar Panahi", year: 2000}
}
for(key in moviesObj) {
    console.log(moviesObj[key]);
}*/
solarSystem.push({name:"Pluto", 
ringSystem:true,
 moons: ["Charon"]});
console.log(solarSystem);

