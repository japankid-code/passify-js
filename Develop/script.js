// Assignment code here
// generate password function has to be connected to the onclick event
// prompt for length, confirm for each character type.
// upon confirming a character type, add that string of characters to usables array
// take characterOptions array and create a string
let stringSpecial = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"; // two escape characters here!!
let stringNumeric = "0123456789";
let stringLower = 'abcdefghijklmnopqrstuvwxyz';
let stringUpper = stringLower.toUpperCase();
let characterOptions = '';

let generatePassword = function() {
  let password = '';
  let passwordLength = parseInt(window.prompt("How long would you like the password to be? Please pick a value between 8 and 128 characters long."));
  let optionQuantity = 0;
  if (passwordLength >= 8 && passwordLength <= 128) {
    let containSpecial = window.confirm("Would you like the password to contain special characters?");
    let containNumeric = window.confirm("Would you like the password to contain numeric characters?");
    let containLower = window.confirm("Would you like the password to contain uppercase letters?");
    let containUpper = window.confirm("Would you like the password to contain lowercase letters?");
    if (containSpecial) {
      // add characters to the string of possible character options
      characterOptions = characterOptions.concat(stringSpecial);
      // turn the options into an array
      let specialArr = stringSpecial.split('');
      optionQuantity++;
      //select random character from the array and add it to the password
      password = password.concat(specialArr[Math.floor((Math.random() * passwordLength))])
    }
    if (containUpper) {
      characterOptions = characterOptions.concat(stringUpper);
      let upperArr = stringUpper.split('');
      optionQuantity++;
      password = password.concat(upperArr[Math.floor((Math.random() * passwordLength))])
    }
    if (containLower) {
      characterOptions = characterOptions.concat(stringLower);
      let lowerArr = stringLower.split('');
      optionQuantity++;
      password = password.concat(lowerArr[Math.floor((Math.random() * passwordLength))])
    }
    if (containNumeric) {
      characterOptions = characterOptions.concat(stringNumeric);
      let numericArr = stringNumeric.split('');
      optionQuantity++;
      password = password.concat(numericArr[Math.floor((Math.random() * passwordLength))])
      
    }
    // loop through remaining characters in password
    for (var i = 0; i < passwordLength - optionQuantity; i++) {
      // get an array of all the selected character options to add from
      let allOptionsArr = characterOptions.split('');
      password = password.concat(allOptionsArr[Math.floor((Math.random() * allOptionsArr.length))])
    }
    return password;
  } else {
    window.alert("password is of insufficient length, please try again.")
    document.getElementById("#password").placeholder = "Your Secure Password";
  }
}

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
