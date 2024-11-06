let score = 0;
let wrongAnswers = 0;
let itemsPlaced = 0;
const totalItems = document.querySelectorAll('.item').length;

function drag(event) {
  event.dataTransfer.setData("id", event.target.id);
  event.dataTransfer.setData("type", event.target.dataset.type);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();

  const itemId = event.dataTransfer.getData("id");
  const itemType = event.dataTransfer.getData("type");

  const droppedItem = document.getElementById(itemId);
  const targetBin = event.target;

  if (targetBin.id === `${itemType}-bin`) {
    droppedItem.style.display = "none";
    score++;
    itemsPlaced++;
    document.getElementById("score").textContent = `Score: ${score} Correct, ${wrongAnswers} Wrong`;

    if (itemsPlaced === totalItems) {
      showCongratulationsModal();
    }
  } else {
    wrongAnswers++;
    showWrongModal();
    document.getElementById("score").textContent = `Score: ${score} Correct, ${wrongAnswers} Wrong`;
  }
}

function showCongratulationsModal() {
  document.getElementById("congratulations-modal").style.display = "block";
}

function showWrongModal() {
  document.getElementById("wrong-modal").style.display = "block";
}

function closeWrongModal() {
  document.getElementById("wrong-modal").style.display = "none";
}

function resetGame() {
  score = 0;
  wrongAnswers = 0;
  itemsPlaced = 0;
  document.getElementById("score").textContent = `Score: ${score} Correct, ${wrongAnswers} Wrong`;

  document.querySelectorAll(".item").forEach(item => {
    item.style.display = "inline-block";
  });

  document.getElementById("congratulations-modal").style.display = "none";
}
