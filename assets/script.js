// Assignment code here
var special = "!?$&".split("");
var lowerCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCharacters = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
var numbers = "0123456789".split("");
function generatePassword() {
  var passwordOptions = [];
  var finalPassword = [];
  var userLength = window.prompt("How many characters would you like on a scale of 8 to 128?");
  var userSpecial = window.confirm("Special Characters, y/n?");
  var userNumbers = window.confirm("Would you like numbers, y/n?");
  var userCapitals = window.confirm("Would you like captial letters, y/n?");
  var userLower = window.confirm("Would you like lower case letters, y/n?");
  console.log(userLength);
  console.log(userSpecial);
  console.log(userNumbers);
  if (userSpecial === true) {
    passwordOptions = passwordOptions.concat(special);
  }
  if (userNumbers === true) {
    passwordOptions = passwordOptions.concat(numbers);
  }
  if (userCapitals === true) {
    passwordOptions = passwordOptions.concat(upperCharacters);
  }
  if (userLower === true) {
    passwordOptions = passwordOptions.concat(lowerCharacters);
  }
  console.log(passwordOptions);
  for (var i = 0; i < userLength; i++) {
    var random = Math.floor(Math.random()*passwordOptions.length);
    finalPassword.push(passwordOptions[random])
    console.log(finalPassword);
  }
  return finalPassword.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
