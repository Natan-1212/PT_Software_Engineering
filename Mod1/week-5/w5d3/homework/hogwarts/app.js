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

