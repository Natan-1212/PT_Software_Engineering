
const $colorPalette = $('#color-palette');
const $myPalette = $('#my-palette');
const $generate = $('#generate');

const makePalette = () => {
	const addColor = (event) => {
		const color = $(event.currentTarget).css('background-color');
	
		const $square = $('<div>');
		$square.addClass('square');
		$square.css('background-color', color);
	
		$myPalette.append($square);
	};

	for(let i = 0; i < 150; i++){
		
		$square = $('<div>');
		$square.addClass('square');
		
const red = Math.floor(Math.random() * 255);
const green = Math.floor(Math.random() * 255);
const blue = Math.floor(Math.random() * 255);
const color = 'rgb('+red+','+green+','+blue+')';
$square.css('background-color', color);
$colorPalette.append($square);
$myPalette.append($square)


	}
	
	$('.square').on('click', addColor);
	
};
$generate.on('click', makePalette);

makePalette();
