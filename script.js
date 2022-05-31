// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength;
var lowerConfirm;
var upperConfirm;
var numberConfirm;
var specialConfirm;
var userChoices;

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Var To Upper Case ------------
var blankUpper = [];
var toUpper = function (x) {
  return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);
//--------------------------------------
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~", "\""];

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);

// Start Function
function generatePassword() {
  // Ask four user Input
  passwordLength = prompt("How many characters would you like your password to have? Choose between 8 and 128");
  console.log("Password length " + passwordLength);
  
  if(!passwordLength) {
    alert("Required value");

  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Please choose between 8 and 128");
    console.log("Password length " + passwordLength);
  
  } else { 
    confirmLower = confirm("Will this contain lower case letters? Click OK to confirm.");
    console.log("Lower case " + lowerConfirm);
    confirmUpper = confirm("Will this contain upper case letters? Click OK to confirm.");
    console.log("Upper case " + upperConfirm);
    confirmNumber = confirm("Will this contain numbers? Click OK to confirm.");
    console.log("Number " + numberConfirm);
    confirmSpecial = confirm("Will this contain special characters? Click OK to confirm.");
    console.log("Special Character " + specialConfirm);

  };

  // No answer then
  if (!lowerConfirm && !upperConfirm && !numberConfirm && !specialConfirm) {
    userChoices = alert("You must choose a criteria");
  // 4 true options
  } else if (lowerConfirm && upperConfirm && numberConfirm && specialConfirm) {
    userChoices = lowerCase.concat(upperCase, numbers, special);
    console.log(userChoices);
  }
  // 3 true options
  else if (lowerConfirm && upperConfirm && numberConfirm) {
    userChoices = lowerCase.concat(upperCase, numbers);
    console.log(userChoices);
  }
  else if (lowerConfirm && upperConfirm && specialConfirm) {
    userChoices = lowerCase.concat(upperCase, special);
    console.log(userChoices);
  }
  else if (lowerConfirm && numberConfirm && specialConfirm) {
    userChoices = lowerCase.concat(numbers, special);
    console.log(userChoices);
  }
  else if (upperConfirm && numberConfirm && specialConfirm) {
    userChoices = upperCase.concat(numbers, special);
    console.log(userChoices);
  }
  // 2 true options
  else if (lowerConfirm && upperConfirm) {
    userChoices = lowerCase.concat(upperCase);
    console.log(userChoices);
  }
  else if (lowerConfirm && numberConfirm) {
    userChoices = lowerCase.concat(numbers);
    console.log(userChoices);
  }
  else if (lowerConfirm && specialConfirm) {
    userChoices = lowerCase.concat(special);
    console.log(userChoices);
  }
  else if (upperConfirm && numberConfirm) {
    userChoices = upperCase.concat(numbers);
    console.log(userChoices);
  }
  else if (upperConfirm && specialConfirm) {
    userChoices = upperCase.concat(special);
    console.log(userChoices);
  }
  else if (numberConfirm && specialConfirm) {
    userChoices = numbers.concat(special);
    console.log(userChoices);
  }
  // 1 true option
  else if (lowerConfirm) {
    userChoices = lowerCase;
    console.log(userChoices);
  }
  else if (upperConfirm) {
    userChoices = blankUpper.concat(upperCase);
    console.log(userChoices);
  }
  else if (numberConfirm) {
    userChoices = numbers;
    console.log(userChoices);
  }
  else if (specialConfirm) {
    userChoices = special;
    console.log(userChoices);
  };

  // Empty variable for the password lenght
  var passwordBlank = [];
  
  // Loop for random selection
  for (var i = 0; i < passwordLength; i++) {
    var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }

  // Join and return the password 
  var password = passwordBlank.join("");
  console.log("Your Pasword is: " + password);
  return password;
  
}