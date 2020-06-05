/* Acronym DRY stand for "Don't Repeat Yourself," and pay attention as less code 
is good: It saves time and effort, is easy to maintain, and also reduces the 
chances of bugs. We learnt programming tools such as 'while' and 'for' loops to 
write a DRY code*/
/*Unlike const, var and let can be declared without being initialized,var declarations 
are globally scoped or  while let and const are block scoped.const variables can 
neither be updated nor re-declared.*/

/*const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;
console.log(a < b);
console.log(c>d);
console.log('Name'=='Name');
console.log(a<b<c);
console.log(a+a<d);
console.log(e!='Kevin');
console.log(f!=e);
/*let g = 0;// assigned a new value and is mutable 
console.log(g);
let g = b+c;// the value of g was assigned and declared/error 
console.log(g);
const g = b+c;// g has been declared /error 
console.log(g);
const 10 = g;//the value g has already been declared/error
console.log(g);
console.log(a!=(b||f)!=f && e!=f);
while (true) {
	console.log('Do not run this loop');
} /*This while loop creates an infinite loop as there is no 
break or pause on the script 
const runProgram = true*/

/*while (runProgram) {
	console.log('Do not run this loop');
	runProgram = false;
}/*the loop repeats itself until a specified condition 
evaluates to be false as the while(false) loop won't be excuted or stopped */
/*let q = 20;
while (q > 10){
	console.log(q);
	q--;
}// the expected result will be will be the value of q will decrease by 1 from 20 upto 11 ,run as expected
let letters = "A";
let i = 0;
while (i < 20) {
	letters += "A";
	i++;
}
console.log(letters);// expected the command will print letter "A" 20 times ,run the code result the same result 
for (let i = 0; i < 100; i++) {
	console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
}// prints the message in the console 100 times and run and got the same result 
for (let i = 0; i< 1000; i++){
	console.log('The number is: ' + i);
}// will print numbers between 0 and 999 and tested the code Result=Expectation 
	console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
	console.log("Without you, today's emotions are the scurf of yesterday's");/*the difference between \ (backslash)  
	and / (forward slash or just slash) is that \ is used as an indicator for apostrophe in string word 
	could be used as \n for new line or \t for a tab. While / is used for specifiying a file path-name 
and separating a directory from sub-file components */
/*for (let i = 999; i >= 0; i--){
		console.log(i);
}
/*for (i = 1; i < 10; i++){
//	console.log('The value of i is : ' + i + ' of 10');
}*/


/*const starWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
for (let i = 0; i < starWars.length; i++) {
   console.log(starWars[i]);
}
for (let i = 0; i < starWars.length; i++) {
    if(i % 2 == 0) {
        const element = starWars[i];
        console.log(element);
    }
}*/