/* The program asks the user to input a phrase.
If the user cancels the program or if the input is undefined the program asks to input a phrase until it receives the answer.
The program gives a possibility to change each character in the phrase, letter by letter. 
The program gives a final result as the phrase from the input, with or without changes.
*/

// first part of the code where the program asks for the initial input
// declare and init the variable 'input' with an empty string
let input = '';
// declare and init a variable with a boolean value 
let userConfirmed = false;
// the condition for the loop to be executed
while (!userConfirmed) {  /* we didn't understand this exclamation mark, but when we changed the boolean to true and removed the !, we got into a loop...*/ 
// input is assigned to a string
  input = prompt("enter a phrase, you'll get a chance to fix your mistakes");

  // if user clicks 'cancel' or OK, 
  if (input === '' || input === null) {
    // the program alerts and asks for the input again
    alert('nope, enter something');
    continue;
  }
// assign the value confirm to the variable userConfirmed 
  userConfirmed = confirm(
    'do you want to use this phrase?\n\n- "' + input + '"'
  );
}

// second part of the code where the program asks whether the user wants to change the characters in the phrase
// declare and init a variable newPhase to an empty string
let newPhrase = '';

// the program iterates inside the input, character by character

for (let character of input) {
  // asking to confirm a character
  let keepIt = confirm(input + '\n\n- do you want to keep "' + character + '"');
  // in case the character is confirmed 
  if (keepIt) {
    // the character is added to the final phrase: the variable newPhrase is reassigned, taking into account the confirmed character
    newPhrase = newPhrase + character;
    // in case the character is not confirmed 
  } else {

    // declare + init a new variable 'replacement' to null
    let replacement = null;
    // the while loop is running until there is no replacement
    while (replacement === null) {
      //variable replacement is assinged to a string
      replacement = prompt('enter a replacement for "' + character + '"');
    }
    // the new character is added to the final phrase, a new phrase is concantenated with the replacement
    newPhrase = newPhrase + replacement;
  }
}

// final output
alert('here is your new phrase:\n\n"' + newPhrase + '"');
