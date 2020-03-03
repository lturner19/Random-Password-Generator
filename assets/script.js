// Assignment Code, ties into event listeners below.
var generateBtn = document.querySelector("#generate");
var clipboardBtn = document.querySelector("#copy");
var clearBtn = document.querySelector("#clear");

// Write password to the #password input (generate random password)
var lowerCaseAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseAlpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var number = ["0", "1", "0", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];

//empty array that holds the user chosen characters, which can then be randomized.
chosenCharacters = [];

//holds the randomized value 
var password = "";


//This function contains the code for generating the questions and the user responses.
function generatePassword() {
  // \n used to put sentences on two separate lines
  var charcNumber = parseInt(prompt("How many characters would you like your password to contain? \n Choose a number between 8 and 128"));
  if (charcNumber > 7 && charcNumber < 129) {

    //This calls the specific functions listed below for each choice.
    choiceLowerCase()
    choiceUpperCase()
    choiceNumber()
    choiceSymbol()


    //Below functions prompt user to choose character types for password.
    function choiceLowerCase() {
      var userAlpha = confirm("Would you like to use lower letters?")
      if (userAlpha) {
        chosenCharacters = chosenCharacters.concat(lowerCaseAlpha);

      }
    }

    function choiceUpperCase() {
      var userBeta = confirm("Would you like to use capital letters?")
      if (userBeta) {
        chosenCharacters = chosenCharacters.concat(upperCaseAlpha);
      }
    }

    function choiceNumber() {
      var userNum = confirm("Would you like to use numbers?")
      if (userNum) {
        chosenCharacters = chosenCharacters.concat(number);
      }
    }

    function choiceSymbol() {
      var userSym = confirm("Would you like to use symbols?")
      if (userSym) {
        chosenCharacters = chosenCharacters.concat(symbol);
      }
    }

    //This will randomize and put together the characters based on the user's response to questions.

    for (a = 0; a < charcNumber; a++) {
      password = password.concat(chosenCharacters[Math.floor(Math.random() * Math.floor(chosenCharacters.length))]);

      console.log(password[a]);
    }
    //This will allow the result of the randomly generated password to be output.
    return password;

    //forces user to pick a number
  } else {
    alert("Please pick a number between 8 and 128.");
  }
}

//This allows the password to be seen by the user
function writePassword() {
  var passwordGenerate = generatePassword();
  var passwordText = document.getElementById("password");

  //stops the code and keeps the undefined word from appearing in the textarea
  if (passwordGenerate === undefined) {
    return;

    //shows the generated password
  } else {
    passwordText.value = passwordGenerate
  }
}

//Copy to clipboard code setup from w3schools.com
function copyToClipboard() {
  var copyPassword = document.getElementById("password");
  //selects the text field
  copyPassword.select();
  //gets text inside text field copied
  document.execCommand("copy");
  //notifies user password has been copied
  alert(`Copied your password: ${copyPassword.value}`);
}



// Adds event listener and calls password function
generateBtn.addEventListener("click", writePassword);


//Adds event listener for copy button and calls clipboard function
clipboardBtn.addEventListener("click", copyToClipboard);



