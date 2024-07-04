// DOM elements
const countEl = document.getElementById("count-el");
const incrementBtn = document.getElementById("increment-btn");
const saveEl = document.getElementById("save-el");

let count = 0;

// Increment function
function increment() {
  count += 1;
  countEl.textContent = count;
}

// Save function
function save() {
  saveEl.textContent += ` ${count} - `;
  countEl.textContent = 0;
  count = 0;
}
