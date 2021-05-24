/*
  a user can provide input that is 10 characters long
    - given they cancel, a message is displayed and they are prompted again
    - given the input is too short, they are told how much too short and prompted again
    - given the input is too long, they are told how much too long and prompted again
    - given the input is 10 characters, the loop will exit and the input is alerted

  test cases:
    invalid input:
      (no test cases! the loop will not exit so there will be no output to test)
    input of 10 characters
      'javascript' -> 'javascript'
      '0123456789' -> '0123456789'
      'a b c d e ' -> 'a b c d e '

*/

console.log('--- begin program ---');

let input = '';
while (input.length !==10 || input !== null) {
  input = prompt('enter a word of 10 letters'); { 
    if (input.length < 10) {
    alert('your word is ' + (10-input.length) + ' characters too short');
    }
    else if(input.length > 10) {
    alert('your word is ' + (input.length - 10) + ' characters too long');
    }
    else {
    alert(input)
    }
  }
}

/* let message = 'your word is '
let word = true;
// --- declare initial output ---

// --- create final output ---
while (word) { 
  if (input === null); {
  alert('you should enter a word');
} else if (input.length !==0 && input.length < 10) {
  message = message + (10 - input.length) + 'characters too short';
  alert(message);
} else if (input.length === 10) {
  word = false;
  alert(input);
} else {
  output = output + (input.length - 10) + 'characters too long';
  alert(message);
  }
}

alert(input)

// --- alert the result ---
console.log('output:', output);

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
