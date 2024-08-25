// Configuration
const TOTAL_ITEMS = 10000;
const ITEM_HEIGHT = 50;
const CONTAINER_HEIGHT = window.innerHeight;
const EXTRA_BUFFER_ITEMS = 5;

// DOM Elements
const listContainer = document.getElementById("list-container");
const list = document.getElementById("list");
const spacer = document.getElementById("spacer");

spacer.style.height = `${TOTAL_ITEMS * ITEM_HEIGHT}px`;

const createList = () => {
  let scrollTop = listContainer.scrollTop;
  let startNode = Math.floor(scrollTop / ITEM_HEIGHT) - EXTRA_BUFFER_ITEMS;
  let visibleNodes =
    Math.ceil(CONTAINER_HEIGHT / ITEM_HEIGHT) + EXTRA_BUFFER_ITEMS;

  let startIndex = Math.max(0, startNode);
  let endIndex = Math.min(startIndex + visibleNodes, TOTAL_ITEMS);

  list.innerHTML = "";

  for (let i = startIndex; i < endIndex; i++) {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");
    itemDiv.textContent = `Div ${i}`;
    itemDiv.style.top = `${i * ITEM_HEIGHT}px`;
    itemDiv.style.height = `${ITEM_HEIGHT}px`;
    list.appendChild(itemDiv);
  }

  listContainer.appendChild(list);
};

window.addEventListener("load", () => createList());

listContainer.addEventListener("scroll", () => {
  console.log("scroll");
  createList();
});
