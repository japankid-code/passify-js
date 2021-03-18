// Assignment code here
// generate password function has to be connected to the onclick event
// prompt for length, confirm for each character type.
// upon confirming a character type, add that string of characters to usables array
// take characterOptions array and create a string
let stringSpecial = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"; // two escape characters here!!
let stringNumeric = "0123456789";
let stringLower = 'abcdefghijklmnopqrstuvwxyz';
let stringUpper = toUpperCase('abcdefghijklmnopqrstuvwxyz');

let arraySpecial = stringSpecial.split();
let arrayNumeric = stringNumeric.split();
let arrayLower = stringLower.split();
let arrayUpper = stringUpper.split();

let generatePassword = function() {
  var password = '';
  var usableCharacters = '';
  let containSpecial = '';
  let containNumeric = '';
  let containLower = '';
  let containUpper = '';
  let passwordLength = parseInt(window.prompt("How long would you like the password to be? Please pick a value between 8 and 128 characters long."));
  if (passwordLength >= 8 && passwordLength <= 128) {
    conditionChecker();
    
  } else {
    window.alert("password is of insufficient length, please try again.")
    document.getElementById("#generate").placeholder = "Your Secure Password";
    break;
  }
  console.log(passwordLength); console.log(containLower); console.log(containNumeric); console.log(containUpper); console.log(containSpecial);
}

let conditionChecker = function() {
  let containSpecial = window.confirm("Would you like the password to contain special characters?");
  let containNumeric = window.confirm("Would you like the password to contain numeric characters?");
  let containLower = window.confirm("Would you like the password to contain uppercase letters?");
  let containUpper = window.confirm("Would you like the password to contain lowercase letters?");
  return containSpecial, containUpper, containLower, containNumeric;
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
