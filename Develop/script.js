// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var generatedCh = [];
  var criteria = infoGrab();

  if (criteria.uppercase === true) {
    optionSourcses.functionArray = optionSources.functionArray.concat(optionSources.uppercaseLetters);

  }
  if (criteria.lowercase === true) {
    optionSources.functionArray = optionSources.functionArray.concat(optionSources.lowercaseLetters);
  }
  if (criteria.numbers === true) {
    optionSources.functionArray = optionSources.functionArray.concat(optionSources.numbers);
  }
  if (criteria.special === true) {
    optionSources.functionArray = optionSources.functionArray.concat(optionSources.specialCharacters);
  }
  for (var i = 0; i < criteria.length; i++) {
    generatedCh.push(generateRandomVariables(criteria.functionArray));
  }
  return generatedCh;
}


// Object "optionSources." Arrays listed within. Function array will support all pushed arrays. 
var optionSources = {
  functionArray: [],
  uppercaseLetters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ],
  lowercaseLetters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ],
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  specialCharacters: ["\\", ".", "+", "*", "?", "[", "^", "]", "$", "(", ")", "{", "}", "=", "!", "<", ">", "|", ":", "-", ],

};

// Beginning process of requesting and collecting data
function infoGrab() {
  var lengthResponse = parseInt(prompt("How many characters would you like?"));
  if (lengthResponse < 8 || lengthResponse > 129 || isNaN(lengthResponse) === true) {
    alert("Passwords much be between 8-128 Characters");
    return;
  }

  var uppercaseResponse = confirm("Would you like to use uppercase letters?");

  var lowercaseResponse = confirm("Would you like to use lowercase letters?");

  var numericalResponse = confirm("Would you like to use numerical values?");

  var specialCharactersResponse = confirm("Would you like to use special characters?");

  if (uppercaseResponse === false && lowercaseResponse === false && numericalResponse === false && specialCharactersResponse === false) {
    alert("You need to choose at least one character type.");
    return;
  }

  var collectedResponse = {
    length: lengthResponse,
    uppercase: uppercaseResponse,
    lowercase: lowercaseResponse,
    numbers: numericalResponse,
    special: specialCharactersResponse,
  };

  return collectedResponse;
}

function generatePassword(criteria) {
  var pulledReturn = criteria
}

function generateRandomVariables(array) {
  var result = Math.floor(Math.random() * array.length);
  var collectedCharacter = array[result];
  return collectedCharacter;
}

function generateRandomVariables() {
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
}