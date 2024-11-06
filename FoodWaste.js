let score = 0;
let wrongAnswers = 0;
let itemsPlaced = 0;
const totalItems = document.querySelectorAll('.item').length; // Total number of items

// Function to handle dragging the item
function drag(event) {
  event.dataTransfer.setData("id", event.target.id);  // Store the item id
  event.dataTransfer.setData("type", event.target.dataset.type);  // Store the item type
}

// Function to allow the drop
function allowDrop(event) {
  event.preventDefault();  // Allow the drop
}

// Function to handle the drop
function drop(event) {
  event.preventDefault();

  // Get the item id and type from the event data
  const itemId = event.dataTransfer.getData("id");
  const itemType = event.dataTransfer.getData("type");

  const droppedItem = document.getElementById(itemId);
  const targetBin = event.target;

  // Check if the dropped item matches the bin
  if (targetBin.id === ${itemType}-bin) {
    // Hide the item once it is dropped into the correct bin
    droppedItem.style.display = "none";
    score++;
    itemsPlaced++;

    // Update the score
    document.getElementById("score").textContent = Score: ${score} Correct, ${wrongAnswers} Wrong;

    // Check if all items are placed correctly
    if (itemsPlaced === totalItems) {
      showCongratulationsModal();
    }
  } else {
    wrongAnswers++;
    showWrongModal();
    document.getElementById("score").textContent = Score: ${score} Correct, ${wrongAnswers} Wrong;
  }
}

// Show the congratulations modal when all items are placed correctly
function showCongratulationsModal() {
  document.getElementById("congratulations-modal").style.display = "block";
}

// Show the wrong modal when an item is placed in the wrong bin
function showWrongModal() {
  document.getElementById("wrong-modal").style.display = "block";
}

// Close the wrong modal without resetting the game
function closeWrongModal() {
  document.getElementById("wrong-modal").style.display = "none";
  // Do not reset the score or wrong answers, just close the modal
}

// Reset the game (if needed for any other functionality)
function resetGame() {
  // Reset all values and elements
  score = 0;
  wrongAnswers = 0;
  itemsPlaced = 0;
  document.getElementById("score").textContent = Score: ${score} Correct, ${wrongAnswers} Wrong;

  // Make items visible again (in case the game is reset)
  document.querySelectorAll(".item").forEach(item => {
    item.style.display = "inline-block"; // Reset display to make items visible again
  });

  // Hide the congratulatory modal
  document.getElementById("congratulations-modal").style.display = "none";
}
