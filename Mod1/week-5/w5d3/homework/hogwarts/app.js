/*if (typeof jQuery == 'undefined'){
  console.log('oops! I still have to link my jQuery properly!');
} else {console.log('I did it! I linked jQuery and this js file!')};
//console.log("logging correcttly");
//console.log("Welcome To Homework Hogwarts!");
$(() => {
  // put jQuery in her

});
const $container = $('.container')
//console.log($container);
$('body').append('<h1/>').text("Hogwarts");

///Year 2
// Following what you did in Year 1, add the following:*/
//h2 element with your name
const $h2 = $('<h2/>')
console.log($h2)
$('#container').append('<h2>Natan Ejigu</h2>')
console.log($h2)
//const $name = $('<h2/>').text('Natan');
//$container.append($name);
//h3 element with your house (Hufflepuff, Gryffindor, Ravenclaw or Slytherin )
const $h3 = $('<h3/>')
console.log($h3)
$('#container').append('<h3>Ravenclaw</h3>')
// h4 element with your pet's name
const $h4 = $('<h4/>')
$('#container').append('<h4>Lala</h4>')
//this h4 element should have a class with a value of your pet type (owl, cat, toad, etc)
$('h4').addClass('dog')
console.log($h4)
// h4 element with your wand
const $h4wand = $('<h4/>')
$('#container').append('<h4>Elder Wand</h4>')

///////////////YEAR Three //////////

// Following what you did in previous years, add the following into an unordered list (with the attribute of storage and a value of trunk):
const $ul = $('<ul/>');
$('#container').append('<ul></ul>')
console.log($ul)
$('ul').attr('storage')
$('ul').val('trunk')

const $li = $('<li/>')
$('ul').append('<li>butter beer</li>')
$('ul').append('<li>invisibility</li>')
$('ul').append('<li>magic map</li>')
$('ul').append('<li>time turner</li>')
$('ul').append('<li>leash</li>')
$('ul').append('<li>Bertie Botts Every Flavor [Jelly] Beans.</li>')

console.log($li)


/////////////YEAR FOUR////////

/*<table>
     <thead>
//         <tr>
//             <th colspan="2">The table header</th>
//         </tr>
//     </thead>
//     <tbody>
//         <tr>
//             <td>The table body</td>
//             <td>with two columns</td>
//         </tr>
//     </tbody>
//     <tfoot>
//         <tr>
//             <td colspan="2">The table footer</td>
//         </tr>
//     </tfoot>
// </table> */

// Right above your table add an h5 that says 'Spring 2017'
const $h5 = $('<h5/>')
$('#container').append('<h5>Spring 2017</h5>')
const $table = $('<table/>')
$('#container').append('<table></table>')
$('table').append('<thead></thead>')
//Inside the table add a thead element
const $th1 = $('<th/>')
$('thead').append('<th>Day</th>')
const $th2 = $('<th/>')
$('thead').append('<th>Classes</th>')
$('thead').append('<tr/>')
// Inside the thead element add two th elements
const $td1 = $('<td/>')
$('tr').append('<td>Monday</td>')
const $td2 = $('<td/>')
$('tr').append('<td>Herbology, Divination, Potions.')


// $('thead').append('</tr>')
const $td3 = $('<td/>')
$('tr').append('<td>Tuesday</td>')
const $td4 = $('<td/>')
$('tr').append('<td>Defense Against the Dark Arts, Quidditch practice')


// $('thead').append('</tr>')
const $td5 = $('<td/>')
$('tr').append('<td>Wednesday</td>')
const $td6 = $('<td/>')
$('tr').append('<td>History of Magic.')


// $('thead').append('</tr>')
const $td7 = $('<td/>')
$('tr').append('<td>Thursday</td>')
const $td8 = $('<td/>')
$('tr').append('<td> Herbology, Divination, Potions.')


// $('thead').append('</tr>')
const $td9 = $('<td/>')
$('tr').append('<td>Friday</td>')
const $td10 = $('<td/>')
$('tr').append('<td>Defense Against the Dark Arts, Quidditch practice')


///////////YEAR FIVE ///////////////

// Break your wand! (select the element that contains your wand and remove it)
$('.wand').remove()
//Class was hard! Drink all your butter beer! (remove just the butter beer from your list)
$('li').first().remove();
//Get a new wand (add the same element back with new text describing your new wand. Be sure to insert it after your pet in the DOM)
// const $h4newWand = $('<h4/>')
$('h4').after('<h4>Wand of Destruction</h4>')
$('h4:last').addClass('newWand')
// $('h4:last')
// $('$h4newWand').last()
// $("h4").last().addClass('newWand');
//having some trouble with classes

// Make your new wand stand out by adding a color of indigo (or whatever color you like). But do it with magic (jQuery): Don't add this css in your style.css file

$('.newWand').css('color','indigo')

// Send your pet on a spy mission (remove your pet from the DOM, put it somewhere else in your HTML). Make sure your pet's leash stays in your trunk (list item with the same class as your pet inside unordered list)
let clone = $(".dog").clone(); // making zeh' clones!
$(".dog").remove();            // original is gone
//Theodore went to the Forbidden Forest

// Have your pet come back (remove your pet from the DOM, put it back in its original location)

$("h3").append(clone); 
//he back....or is he

////////////////YEAR SIX///////////

// Nosey roommate alert! hide (use jQuery method hide) to hide all your belongings with a class of secret (give an argument of 'slow' - to see this function in action)


$('.secret').hide('slow')

// Nosey roommate falls asleep 2 seconds later (chain the jQuery method delay on your hide method (give argument of at least 2000) to prevent showing your secret elements too soon.
$('.secret').hide('slow').delay(2000)


// Use jQuery method show to reveal all of your belongings with a class of secret (give an argument of 'slow' - to see this function in action)

$('.secret').hide('slow').show('slow')

//Accident! You transmogrified your pet's leash into half cabbage
//add the class cabbage to your pet's leash. Do not replace your pet's leash's original class. Your pet, which also has the same class should remain unaffected

// $('ul li').children().eq(2).addClass('cabbage');
//still having trouble with these classes

$( "li" ).eq( 3 ).addClass( 'cabbage' );
// Fix your pet's leash by removing the class of cabbage (be sure to keep your pet's leash's original class)

$( "li" ).eq( 3 ).removeClass( 'cabbage' );

