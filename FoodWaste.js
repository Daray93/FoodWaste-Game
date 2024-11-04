let score = 0;

document.querySelectorAll(".item").forEach(item => {
  item.addEventListener("dragstart", dragStart);
});

document.querySelectorAll(".bin").forEach(bin => {
  bin.addEventListener("dragover", dragOver);
  bin.addEventListener("drop", dropItem);
});

function dragStart(event) {
  event.dataTransfer.setData("text", event.target.dataset.type);
  event.dataTransfer.setData("id", event.target.id);
}

function dragOver(event) {
  event.preventDefault();
}

function dropItem(event) {
  event.preventDefault();
  const itemType = event.dataTransfer.getData("text");
  const itemId = event.dataTransfer.getData("id");

  // Check if the item type matches the bin
  if (event.target.id.includes(itemType)) {
    const item = document.querySelector(`.item[data-type='${itemType}']`);
    item.style.display = "none";
    score++;
    document.getElementById("score").textContent = `Score: ${score}`;
  } else {
    alert("Oops! Wrong bin. Try again.");
  }
}
