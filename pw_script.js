// Assignment Code
var generateBtn = document.querySelector("#generate");
var clipboardBtn = document.querySelector("#password");

// Write password to the #password input (generate random password)
var lowerCaseAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseAlpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var number = ["0", "1", "0", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];

//empty array that holds the user chosen characters, which can then be randomized.
randomCharacters = [];

//holds the randomized value 
var password = "";


//This function contains the code for generating the questions and the user responses.
function generatePassword() {

  var charcNumber = parseInt(prompt("How many characters would you like your password to contain?"));
  if (charcNumber > 7 && charcNumber < 129) {

    //This calls the specific functions listed below for each choice.
    choiceLowerCase()
    choiceUpperCase()
    choiceNumber()
    choiceSymbol()


    //These functions have the user choose what type of characters they want for their password.
    function choiceLowerCase() {
      var userAlpha = confirm("Would you like to use lower letters?")
      if (userAlpha) {
        randomCharacters = randomCharacters.concat(lowerCaseAlpha);

      }
    }

    function choiceUpperCase() {
      var userBeta = confirm("Would you like to use capital letters?")
      if (userBeta) {
        randomCharacters = randomCharacters.concat(upperCaseAlpha);
      }
    }

    function choiceNumber() {
      var userNum = confirm("Would you like to use numbers?")
      if (userNum) {
        randomCharacters = randomCharacters.concat(number);
      }
    }

    function choiceSymbol() {
      var userSym = confirm("Would you like to use symbols?")
      if (userSym) {
        randomCharacters = randomCharacters.concat(symbol);
      }
    }

    //This will randomize and put together the characters based on the user's response to questions.

    for (a = 0; a < charcNumber; a++) {
      password = password.concat(randomCharacters[Math.floor(Math.random() * Math.floor(randomCharacters.length))]);
      console.log(password[a]);
    }
    //This will allow the result of the randomly generated password to be output.
    return password;

  } else {
    alert("Please pick a number between 8 and 128.");
  }
}

//This allows the password to be seen by the user
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // copyBtn.removeAttribute("disabled");
  //copyBtn.focus();
}

function copyToClipboard() {
  var copyPassword = document.getElementById("password");
  copyPassword.select();
  document.execCommand("copy");
  alert("Copied your password: " + copyPassword.value);
}
clipboardBtn.addEventListener("click", copy);

// Added event listener to generate button
generateBtn.addEventListener("click", writePassword);


