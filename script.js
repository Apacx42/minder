// Assignment code here

// DOM Elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

resultEl.innerText = generatePasswordEl.addEventListener('click', () => {
  const lenght = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasnumber = numbercaseEl.checked;
  const hassymbol = symbolcaseEl.checked;
  
  resultEl.innerText = generatePassword(hasLower, hasUpper, hasnumber, hassymbol, length);
  
});

var slider = document.getElementById('myRange');
var output = document.getElementById('style');
output.innerHTML = slider.value;

slider.oninput = function() { 
  output.innerHTML = this.value;
}



//Generate password function
function generatePassword(lower, upper, number, symbol, length) {
  // 1.Init pw var
  // 2.Filter out unchecked types
  // 3. Loop over length call generator function for each type
  // 4. Add final pw to the pw var and return

  let generatePassword = '';

  const typesCount = lower + upper + number + symbol

  console.log('typesCount: ', typesCount);

  const typesArr = [{lower}, {upper}, {number}, {symbol}].filter
  (
    item => Object.values(item)[0]
  );  

  console.log('typesArr:', typesArr);

  if(typesCount === 0) {
    return'';

  }

  for(let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      
      console.log('funcName: ', funcName);

      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

// Generator functions - https://www.rapidtables.com/code/text/ascii-table.html

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);

}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);

}

function getRandomSymbol() {
  const symbol = '!@#$%^&*(){}[]=<>/,.';
  return symbol[Math.floor(Math.random() * symbol.length)];

}
  console.log(getRandomSymbol());

  // Get references to the #generate element
  var submitInput = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

  // Add event listener to generate button
  generatePassword.addEventListener("click", writePassword);

