// Configuration
const TOTAL_ITEMS = 10000;
const ITEM_HEIGHT = 50;
const CONTAINER_HEIGHT = window.innerHeight;
const BUFFER = 5;

// DOM Elements
const listContainer = document.getElementById("list-container");
const list = document.getElementById("list");
const spacer = document.getElementById("spacer");

spacer.style.height = `${TOTAL_ITEMS * ITEM_HEIGHT}px`;

const createList = () => {
  for (let i = 0; i < 20; i++) {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");
    itemDiv.textContent = `Div ${i}`;
    itemDiv.style.top = `${i * ITEM_HEIGHT}px`;
    itemDiv.style.height = `${ITEM_HEIGHT}px`;
    list.appendChild(itemDiv);
  }
  listContainer.appendChild(list)
};

window.addEventListener("load", () => createList());


