// Object "optionSources;" Arrays listed within; functionArray will support all concat arrays. 
var optionSources = {
  functionArray: [],
  uppercaseLetters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ],
  lowercaseLetters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ],
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  specialCharacters: ["\\", ".", "+", "*", "?", "[", "^", "]", "$", "(", ")", "{", "}", "=", "!", "<", ">", "|", ":", "-", ],
};

// function that prompts the password criteria from the user
// ensures that standards are met through use of conditional statements
function infoGrab() {
  // prompts the user
  var lengthResponse = parseInt(prompt("How many characters would you like?"));
  // verifies the correct length
  if (lengthResponse < 8 || lengthResponse > 129 || isNaN(lengthResponse) === true) {
    alert("Passwords much be between 8-128 Characters.");
    return;
  }
  // confirm true/false for uppercase letters
  var uppercaseResponse = confirm("Would you like to use uppercase letters?");

  //confirm true/false for lowercase letters
  var lowercaseResponse = confirm("Would you like to use lowercase letters?");

  //confirm true/false for numbers
  var numericalResponse = confirm("Would you like to use numerical values?");

  //confirm true/false for special characters
  var specialCharactersResponse = confirm("Would you like to use special characters?");

  // If user does NOT choose any of the choices, they are told to do so again and the page resets.
  if (uppercaseResponse === false && lowercaseResponse === false && numericalResponse === false && specialCharactersResponse === false) {
    alert("You need to choose at least one character type.");
    return;
  };

  // Collection of the user inputs with repurposed variable names 
  var collectedResponse = {
    length: lengthResponse,
    uppercase: uppercaseResponse,
    lowercase: lowercaseResponse,
    numbers: numericalResponse,
    special: specialCharactersResponse,
  };
  // return 
  return collectedResponse;
}

// From the given array, randomly select a singular index and return that value to collectedCharacter.
// Random character generator
function generateRandom(array) {
  // collect random index
  var randIndex = Math.floor(Math.random() * array.length);
  // from index, collect character
  var collectedCharacter = array[randIndex];
  //return random character
  return collectedCharacter;
}

// Function that takes the responses from the user and puts it into the array 'functionArray' 
function generatePassword() {
  // pull in criteria for password
  var criteria = infoGrab();
// store collection that gurantees at least one of the needed character type
  var generatedCh = [];
  

  if (criteria.uppercase === true) {
    optionSourcses.functionArray = optionSources.functionArray.concat(optionSources.uppercaseLetters);
    generatedCh.push(generateRandom(uppercaseLetters));
  }
  if (criteria.lowercase === true) {
    optionSources.functionArray = optionSources.functionArray.concat(optionSources.lowercaseLetters);
    generatedCh.push(generatePassword(lowercaseLetters));
  }
  if (criteria.numbers === true) {
    optionSources.functionArray = optionSources.functionArray.concat(optionSources.numbers);
    generatedCh.push(generateRandom(numbers));
  }
  if (criteria.special === true) {
    optionSources.functionArray = optionSources.functionArray.concat(optionSources.specialCharacters);
    gerantedCh.push(generateRandom(specialCharacters));
  }

// groups all  generated characters together
  for (var i = 0; i < generatedCh.length; i++) {
    result[i] = generatedCh[i];
  }

// Join strings all generated characters into a string
// Returns this string to generatePassword
  return generatedCh.join('');
}

// Returns the object of "collectedResponse" to infoGrab 
return collectedResponse;
}

// Undefined when this function runs. 
// function generatePassword(criteria) {
//   var pulledReturn = criteria
// }

// From the given array, randomly select a singular index and return that value to collectedCharacter.
function generateRandom(array) {
  var randIndex = Math.floor(Math.random() * array.length);
  var collectedCharacter = array[randIndex];
  return collectedCharacter;
}

function generatePassword(criteria) {
  var pulledReturn = criteria
}

// Grab the query button for event listenr
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var that grabbed generated password
  var password = generatePassword();
  // grab Dom ID to inscibe upon
  var passwordText = document.querySelector("#password");
  // give passwordText.value a value
  passwordText.value = password;
}

// event listener to start the password creation
generateBtn.addEventListener("click", writePassword);


// for (var i = 0; i < generatedCh.length; i++) {
//   generatedCh.push(generateRandom(criteria.functionArray));
// }