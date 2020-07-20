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