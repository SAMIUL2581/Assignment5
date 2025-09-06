let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

// Navbar elements
const heartDisplay = document.getElementById('heartCount');
const coinDisplay = document.getElementById('coinCount');
const copyDisplay = document.getElementById('copyCount');

// History list
const historyList = document.getElementById('historyList');

// Heart click for favorites
function onHeart(name) {
  heartCount++;
  heartDisplay.textContent = heartCount;
  alert(`You favorited: ${name}`);
  addHistory("Favorite", name);
}

// Copy number
function copyNumber(number) {
  navigator.clipboard.writeText(number).then(() => {
    copyCount++;
    copyDisplay.textContent = copyCount;
    alert(`Copied: ${number}`);
    addHistory("Copy", number);
  });
}

// Call number
function callNumber(name, number) {
  if (coinCount >= 20) {
    coinCount -= 20;
    coinDisplay.textContent = coinCount;
    alert(`Calling ${name}: ${number}`);
    addHistory("Call", `${name} - ${number}`);
  } else {
    alert("Not enough coins to make a call!");
  }
}

// Add history entry with time
function addHistory(type, text) {
  const li = document.createElement("li");
  const time = new Date().toLocaleTimeString();
  li.textContent = `${type}: ${text} [${time}]`;
  historyList.prepend(li); // newest on top
}

// Clear history
function clearHistory() {
  historyList.innerHTML = "";
}
