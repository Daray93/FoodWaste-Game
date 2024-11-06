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
  const targetBin = event.target.closest('.bin');

  if (targetBin && targetBin.id === `${itemType}-bin`) {
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

/* Touch Event Handling for Mobile Devices */
const items = document.querySelectorAll('.item');
items.forEach(item => {
  item.addEventListener('touchstart', touchStart);
  item.addEventListener('touchmove', touchMove);
  item.addEventListener('touchend', drop);
});

function touchStart(event) {
  event.dataTransfer = { id: event.target.id, type: event.target.dataset.type };
}

function touchMove(event) {
  const touch = event.touches[0];
  event.target.style.position = 'absolute';
  event.target.style.left = `${touch.pageX}px`;
  event.target.style.top = `${touch.pageY}px`;
}
