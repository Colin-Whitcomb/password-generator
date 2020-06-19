// Object "optionSources;" Arrays listed within; functionArray will support all concat arrays. 
var optionSources = {
  // store possible types of character arrays to include in password
  uppercaseLetters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ],
  lowercaseLetters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ],
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  specialCharacters: [".", "+", "*", "?", "[", "^", "]", "$", "(", ")", "{", "}", "=", "!", "<", ">", "|", ":", "-", ],
};

// function that prompts the password criteria from the user
// ensures that standards are met through use of conditional statements
function infoGrab() {
  // prompts the user
  var lengthResponse = parseInt(prompt("How long would you like your password?"));
  // verifies the correct length
  if (lengthResponse < 8 || lengthResponse > 129 || isNaN(lengthResponse) === true) {
    alert("Passwords much be between 8-128 Characters.");
    return;
  }
  // confirm true/false for uppercase letters
  var uppercaseResponse = confirm("Would you like to use uppercase letters?");

  // confirm true/false for lowercase letters
  var lowercaseResponse = confirm("Would you like to use lowercase letters?");

  // confirm true/false for numbers
  var numericalResponse = confirm("Would you like to use numerical values?");

  // confirm true/false for special characters
  var specialCharactersResponse = confirm("Would you like to use special characters?");

  // if user does NOT choose any of the choices, they are told to do so again and the page resets.
  if (uppercaseResponse === false && lowercaseResponse === false && numericalResponse === false && specialCharactersResponse === false) {
    alert("You need to choose at least one character type.");
    return;
  };

  // collection of the user inputs with repurposed variable names 
  var collectedResponse = {
    length: lengthResponse,
    uppercase: uppercaseResponse,
    lowercase: lowercaseResponse,
    numbers: numericalResponse,
    special: specialCharactersResponse,
  };
  // return collectedResponse to infoGrab
  return collectedResponse;
}

// From the given array, randomly select a singular index and return that value to collectedCharacter.
// Random character generator
function generateRandom(array) {
  // collect random index
  var randIndex = Math.floor(Math.random() * (array.length));
  // from index, collect character
  var collectedCharacter = array[randIndex];
  // return random character
  return collectedCharacter;
}

// Function that takes the responses from the user and puts it into the array 'functionArray' 
function generatePassword() {
  // pull in criteria for password
  var criteria = infoGrab();
  // store password 
  var result = [];
  console.log(result);
  // store collection that gurantees at least one of the needed character type
  var generatedCh = [];
  // store the possible arrays for character types
  var functionArray = [];

  // if the user chooses to use uppercase letters, push uppercase array
  if (criteria.uppercase === true) {
    functionArray = functionArray.concat(optionSources.uppercaseLetters);
    generatedCh.push(generateRandom(optionSources.uppercaseLetters));
  }

  // if the user chooses to use lowercase letters, push lowercase array
  if (criteria.lowercase === true) {
    functionArray = functionArray.concat(optionSources.lowercaseLetters);
    generatedCh.push(generateRandom(optionSources.lowercaseLetters));
  }
  // if the user chooses to use numbers, push numbers array
  if (criteria.numbers === true) {
    functionArray = functionArray.concat(optionSources.numbers);
    generatedCh.push(generateRandom(optionSources.numbers));
  }
  // if the user chooses to use special characters, push special characters array
  if (criteria.special === true) {
    functionArray = functionArray.concat(optionSources.specialCharacters);
    generatedCh.push(generateRandom(optionSources.specialCharacters));
  }

  // create amount of characters equal to chosen criteria
  for (var i = 0; i < criteria.length; i++) {
    // generate a combination of characters from the arrays that the user has chosen
    var chosen = generateRandom(functionArray);
    // push these characters into "result"
    result.push(chosen);
  }

  // loops through array of generated characters
  for (var i = 0; i < generatedCh.length; i++) {
    // adds gerneratedCh[i] into result[i]
    result[i] = generatedCh[i];
  }
  
  // 1 - creates a string from the array in result []
  // 2 - returns this value to generatePassword
  return result.join('');
}

// grab the query button for event listenr
var generateBtn = document.querySelector("#generate");

// write password to the #password input
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
