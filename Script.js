// Get the screen element
const screen = document.getElementById("screen");

// Initialize the result variable
let result = "";

// Function to add a value to the result variable
function addToResult(value) {
  result += value;
  screen.value = result;
}

// Function to clear the result variable
function clearResult() {
  result = "";
  screen.value = result;
}

// Function to delete the last character from the result variable
function deleteLast() {
  result = result.slice(0, -1);
  screen.value = result;
}

// Function to insert a mathematical function into the result variable
function insertFunction(func) {
  result += `${func}(`;
  screen.value = result;
}

// Function to add the value of pi to the result variable
function pi() {
  result += Math.PI;
  screen.value = result;
}

//radians = (degrees * π) / 180

// Function to convert degrees to radians
function toRadians(degrees) {
  return degrees * (Math.PI/180);
}

// Function to calculate the result of the expression in the result variable
function calculateResult() {
  try {
    result = eval(result);
    screen.value = result;
  } catch (error) {
    screen.value = "Error";
  }
}
