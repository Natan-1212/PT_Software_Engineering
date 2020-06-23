/*DRY -Don’t repeat yourself 
As repeating oneself causes a long expression, a series of statements that causes creation of
new abstractions. 

KISS-Keep it simple, stupid!
Avoid complexities as simle codes takes ess time to write, has fewer bugs, and is easier to modify.*

Avoid creating a YAGNI-(You aren’t going to need it)
Avoid to add functionality until you need it

Do the simplest thing that could possibly work
Question "What is the simplest thing that could possibly work?" -leads to design simple code 

Don't make me think
The point is that code should be easily read and understood with a minimum of effort required

Write code for the maintainer
Almost any code that is worth writing is worth maintaining in the future, either by you or by someone else.

Single responsibility principle
A component of code (e.g. class or function) should perform a single well defined task.

Avoid premature optimization
Don’t even think about optimization unless your code is working, but slower than you want.

Separation of concerns
Different areas of functionality should be managed by distinct and minimally overlapping modules of code.*/

/////Which ones surprise you (if any)?/////
//The tenet that says "Don't make me think" as mostly at this stage i am struggling to code based on whether 
//the desired/expected result without an error ,not focusing on this principle. 

///Which one is currently giving you the most struggle?//////
//DRY,Avoid creating a YAGNI, and Don't make me think

//////////Commenting Code////////
/*const f = l => {
    let es = 0, p = 0, c = 1, n = 0
    while (c <= l) {
      n = c + p
      [c, p] = [n, c]
      es += (c % 2 === 0) ? c : 0
    }
    return es
  }
  
  console.log(f(55))

/* declare a function with a constant named 'f'
const f = l => {
    // declare variables and assigned numeric values
    let es = 0, p = 0, c = 1, n = 0
    // create a while loop with the condition being variable 'c' is less than or equal to the incoming value
    while (c <= l) {
      // assign the product of 'c' and 'p' to the variable 'n'
      n = c + p;
      // set the value of 'p' to 'c' and the value of 'c' to the value of 'n'
      [c, p] = [n, c]
      // if 'c' is an even number increase the value of 'c'
      es += (c % 2 === 0) ? c : 0
    }
    // return the value of 'es' from the function
    return es
  }
  // print the returned value of the function with an input value of 55
  console.log(f(55))*/
  
  ////Answer with comments//////
/*const f2 = (limit) => {
  let evenSum = 0;
  let previous = 0;
  let current = 1;
  while (current <= limit) {
    let next = current + previous;
    previous = current;
    current = next;
    if (current % 2 === 0) {
      evenSum += current;
    }
  }
  return evenSum;
}


console.log(f2(55))

  /*In keeping with one of our programming principals (write code for the maintainer): 
  What would have been a more semantic name for this function (hint: this is a problem 
   we had for either lab or hw and is considered a classic ) - are there any other variable names 
   or things that would make this code easier to read and understand?

If you started a new job and your project was to expand the functionality of this function 
by allowing a second argument and then based on that second argument, returning the sum of even or 
  odd numbers, which code would you rather start working with f or f2?

Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this 
semi-colon! Run the code, is this semi-colon necessary? 
   

  

    
