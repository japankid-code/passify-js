// Assignment code here
// generate password function has to be connected to the onclick event
// 
let generatePassword = function() {
  let passwordLength = window.prompt("How long would you like the password to be?")
  let containSpecial = window.prompt("Would you like th password to contain special characters?")
  let containNumeric = window.prompt("Would you like th password to contain numeric characters?")
  let containLower = window.prompt("Would you like th password to contain uppercase letters?")
  let containUpper = window.prompt("Would you like th password to contain lowercase letters?")
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
