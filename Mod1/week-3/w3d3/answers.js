//A light switch that can be either on or off./
// datatype: boolean 
// data structure example: const switch = false; 

//A user's email address.
// datatype: boolean 
//data structure example: const email = "terra12@gmail.com"; 

//A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// datatype: object
//data structure example: const spaceshipObject = {hull, laser blasters, tractor beam, and warp drive}; 


//A list of student names from our class.
// datatype: string and Arrays 
//data structure example: const studentNames  = ["Natan", "Angel","Jose"];

//A list of student names from our class, each with a location.
// datatype: object
//data structure example: const studentLocation = {
 //   name: "Natan",
 //   location: "Columbus"
   //    };


//A list of student names from our class, each with a location and each with a list of favorite tv shows.
// datatype: objects
//data structure example: const studentInfo = {
   // name: "Natan",
 //   location: "Columbus",
 //    favoriteShow:"Better call Saul", "Breaking bad"};

 ////////Take It Easy//////////////
 const crazyObject = {
    taco: [{meat: 'steak',
           cheese: ['panela', 'queso', 'chihuahua']},
           {meat: 'chicken',
            salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
          ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [{
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
      ]
    }
  }

  //1."omg my mouth is burning"
  //console.log(crazyObject.taco[1].salsa[5]);

  //2."Pretty pretty prettayyyyy good"
  //console.log(crazyObject.larry.quotes[0]);

  //3."Swearing at Larry and Jeff"
   //console.log(crazyObject.larry.characters[2].favourtieHobby);

   //4."Chicken Teriyaki Boyyyyyy"
    //console.log(crazyObject.larry.nicknames[1]);

    //5. The object the contains the name funkhauser
    //console.log(crazyObject.larry.characters[1].name);

    //6.Add the quote "I'm trying to elevate small talk to medium talk" to Larry's quote array. 
    //Confirm that it was added.
    //console.log(crazyObject.larry.quotes.push("I\'m trying to elevate small talk to medium talk"));
    //console.log(crazyObject.larry.quotes);