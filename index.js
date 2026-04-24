// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
      document.body.style.backgroundColor = 	"rgba(255, 0, 0, 1)"
  // Implement the function to change background color
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
      document.body.style.backgroundColor = ""
  // Implement the function to reset background color
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  const keyPressed = event.key
  document.getElementById('keyPressDisplay').textContent = `Key pressed: ${keyPressed}`

  // Implement the function to display key pressed
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  const userInput = document.getElementById('textInput').value
  document.getElementById('textInputDisplay').textContent = `You typed: ${userInput}`
  // Implement the function to display user input
}

// Attach Event Listeners
function setupEventListeners() {
// Attach event listener to change background color when the button is clicked
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor)

  // Attach event listener to reset background color when the body is double-clicked
  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor)

  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener('keydown', displayKeyPress)

  // Attach event listener to display user input in real-time as they type
  document.getElementById('textInput').addEventListener('input', displayUserInput)
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}