/*
  a user can enter two values and learn if the first includes the second.
    - given the user cancels either prompt, the program is sad
    - given the second input is part of the first, the user is told it is
    - given the cases are different, this search will still succeed
    - given the second input is not part of the first, the user is told so

  test cases:
    the user cancels:
      null, null -> ':('
      null, '' -> ':('
      '', null -> ':('
    both inputs are empty:
      '', '' -> '"" includes ""'
    only the first input is empty
      '', 'hello' -> '"" does not include "hello"'
      '', 'bye' -> '"" does not include "bye"'
    only the second input is empty
      'hello', '' -> '"hello" does include ""'
      'bye', '' -> '"bye" does include ""'
    the first input does include the second
      'car', 'A' -> '"car" does include "A"'
      'car', 'a' -> '"car" does include "a"'
      'Dog', 'do' -> '"Dog" does include "do"'
      'Dog', 'DO' -> '"Dog" does include "DO"'
    the first input does not include the second
      'javascript', 'css' -> '"javascript" does not include "css"'
      'java script', 'as' -> '"java script" does not include "as"'
      'Java Script', 'as' -> '"Java Script" does not include "as"'
*/

console.log('--- begin program ---');

// --- gather user input ---
let firstWord = prompt('enter the first word');
console.log('text:', firstWord);

let secondWord = prompt('enter the second word');
console.log('query:', secondWord);
// --- declare initial output ---
let output;

// --- create final output ---
if (firstWord === '' && secondWord === '') {
  output = '"" includes ""' 
}

else if (secondWord === '' && firstWord != '') {
  output = firstWord + ' does include ""'
}

else if (firstWord === '' && secondWord != '') {
  output = '"" does not include ' + secondWord
}

else if (firstWord.includes(secondWord)) {
  output = firstWord + ' does include ' + secondWord
}

else {
  output = firstWord + ' does not include ' + secondWord
}

// --- alert the result ---
console.log('output:', output);
alert(output);

console.log('--- end program ---');

/*
  checklist:
    [ ] the code is formatted
    [ ] variable names are clear and helpful
    [ ] each line of code is explained in a comment above that line
        - use full sentences and correct JS vocabulary
    [ ] the program runs
    [ ] the program has no errors
    [ ] all of the test cases work
    [ ] you tested strange inputs that could break your program (edge cases)
*/
