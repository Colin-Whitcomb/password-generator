// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var criteria = infoGrab();
  var password = generatePassword(criteria);
  var passwordText = document.querySelector("#password");
  passwordText.value = password; 
}

generateBtn.addEventListener("click", writePassword);

function generatePassword(criteria) {
  var generatedCh = [];

if (criteria.uppercase === true){
  optionSourcses.functionArray = optionSources.functionArray.concat(criteria.uppercaseLetters);

}
if (criteria.lowercase === true){
  optionSources.functionArray = optionSources.functionArray.concat(criteria.lowercaseLetters);
}
if (criteria.numbers === true){
  optionSources.functionArray = optionSources.functionArray.concat(criteria.numbers);
}
if (criteria.special === true) {
  optionSources.functionArray = optionSources.functionArray.concat(criteria.specialCharacters);
}
for (var i = 0; i < criteria.length; i++) {
  generatedCh.push(generateRandomVariables(criteria.functionArray));
}
return generatedCh;
}



//Global Variables
// var result = '';
// var finalArray = "[]";

// Object "optionSources." Arrays listed within. Function array will support all pushed arrays. 
var optionSources = {
  functionArray: [],
  uppercaseLetters: ["A", "B", "C", "D", "E","F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",],
  lowercaseLetters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",],
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  specialCharacters: ["\\", ".", "+", "*", "?", "[", "^", "]", "$", "(", ")", "{", "}", "=", "!", "<", ">", "|", ":", "-", ],

};

// Object of Questions
// Questions are currently listed as indexs of the 
// var objectWithQuestions = {
  // Name of array + array values
  // "questions": [
  //   "Would you like to use uppercase letters?",
  //   "Would you like to use lowercase letters?",
  //   "Would you like to use numerical values?",
  //   "Would you like to use special characters?",
  // ]


// 1) Ask the questions 2) Record the answers 3) apply the right work to the coordinating array
// Not sure the middle section is correct
function infoGrab(){
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



 // for (var i = 0; i < array.length; i++)
// for (var i = 0; i < questions.length; i++) {
//   objectWithQuestions.questions.forEach(myFunction);
//   var userResponse = confirm([i]);
// }

//   function myFunction(); 
//   optionSources.functionArray.push(userResponse);

  // If statemetment that does the work of adding arrays if chosen to do so. 
// Creates random number and letter combination of 12 integers


// Example of Push
  // var favTVshows = [];
  // var tvShow;

  // For Loop Elements Repeats 3 Times
  // for (var i = 1; i < 4; i++) {

  //   // Asking the user what is their fav tv show
  //   tvShow = prompt("What's your #" + i + " favorite TV show?");

  //   // Adds the user response into the empty array above. 
  //   favTVshows.push(tvShow);
  // }

// Creates random number and letter combination of 12 integers

// function generateRandomVariables() {
//   for (var i = 0; i < length; i++) {
//   result += characters.charAt(Math.floor(Math.random() * charactersLength));
// }

// Add +1??
//   console.log(makeid(12)); // Operator is 12 right now ... need to add function that connects it to the 8-128 choice.
// }
// return result;

// Pseudo Code Layout - Checklist

// Prompts include the following
// 1. Choose length 8 - 128 words (inclusive)
// 2. Offers lowercase, uppercase, numeric, and/or special characters
// a. NEEDS to choose one 
// 3. Input needs to be validated - at least one character type selected 
// 4. When prompts are answered - password is generated that matches criteria
// 5. Password is either displayed in an alert or written th the page. 

// Add event listener to generate button

