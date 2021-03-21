// Assignment code here
// Generator functions - https://www.rapidtables.com/code/text/ascii-table.html

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

}
console.log(getRandomLower());

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
