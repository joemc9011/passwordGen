

//array of characters to pull from
var userCharacters = [];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericalValues = ["1", "2", "3", "4", "5", "6", "7", , "8", "9", "0"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "="];

function generatePassword() {
//prompt leading to user input of a whole number
  var length = parseInt(prompt("How many characters would you like your generated password to contain? (Min: 8 Characters. Max: 128)"));
 //incase user input length does not meet 8-128 rule, it will ask one more time.
   if (isNaN(length) === true || length > 128 || length < 8) {
    prompt("Password length must Min: 8 Characters, Max: 128");
    return;
  }

  //will call on function below, to ask remaining password preferences
  getUserOptions();

  //variables for taking the character amount and combining them with the other arrays (aside from commas)
  var combo = userCharacters.join("").split(",");
  var passText = "";


  //Loops dependent on password character length
  for (var i = 0; i < length; ++i) {
    var randomIndex = Math.floor(Math.random() * combo.length);
    passText += combo[randomIndex];
  }

  console.log(passText);
  return passText;
}
//password preferences
function getUserOptions() {
  var lowerConfirm = confirm("Would you like your generated password to contain lower case letters");
  var upperConfirm = confirm("Would you like your generated password to contain upper case letters?");
  var numbersConfrim = confirm("Would you like your generated password to contain numbers?");
  var specCharConfirm = confirm("Would you like your generated password to contain special characters? (Ex: ~!@#$%^&*()/+=)?");


  if (lowerConfirm) {
    lowerCaseLetters.join();
    userCharacters.push(lowerCaseLetters);
  }
  if (upperConfirm) {
    upperCaseLetters.join()
    userCharacters.push(upperCaseLetters);
  }
  if (numbersConfrim) {
    numericalValues.join();
    userCharacters.push(numericalValues);
  }
  if  (specCharConfirm) {
    specialCharacters.join();
    userCharacters.push(specialCharacters);
  }
  return;
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
