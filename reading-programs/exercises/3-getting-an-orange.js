
/* this program asks to enter the 'orange' word, in upper or lower case.
if the user closes or clicks ok, the loop keeps going on.
if the user types another word (not orange) the loop keeps going on.
if the input is valid the user receives a message describing the type of orange, the program is executed and the loop stops.

the program gives different alerts depending on the register of the letters.
*/

/* -- get an orange -- */

// declare and init a variable for a string 
let theOrange = '';
// checking the value of the input
// takes into account the first condition if the input is empty
while (theOrange === '') {
// declare and init a new variable – the variable returns to a prompt
// the role of the input variable: to get the information from the user (input data)
  let input = prompt('give me an orange, lower or upper case');
// checks if the data equals to null
// check if the user presses 'cancel'
  if (input === null) {
// repetition control flow (answer for the question): if the input is null (from the user experience: the user presses 'cancel'), comes back to the beginning of the loop
    continue;
  }
// checks if input stricly equals to 'orange', given the input is transformed to lower case
  if (input.toLowerCase() === 'orange') {
// variable theOrange is reassigned to input (a question to Evan: what term is better to use, 'reassign' or 'assign' here? This is controversial) 
    theOrange = input;
  }
}

/* -- describe the orange -- */
// declare + init a variable for a string
let description = '';
// checking variable, checking if the variable strictly equals to 'orange' in lowercase
if (theOrange === 'orange') {
  // assign a new value to variable 'description', the new value is 'small'
  description = 'small';
  // checking variable, checking if the variable strictly equals to 'orange' in uppercase if the first condition doesn't apply
} else if (theOrange === 'ORANGE') {
  // assign a new value to variable 'description', the new value is 'big'
  description = 'big';
  // checking variable, checking for other cases (if conditions from lines 36 and 40 are false, and the condition from line 26 is met)
} else {
  // assign a new value to variable 'description', the new value is a string 'small and big'. 
  description = 'small and big';
}
// call alert message + two concatenations
alert(theOrange + ' is a ' + description + ' orange');
