const itemHolder = document.getElementById('item-holder');
const NUMBER_OPTIONS = 8;

// Create items
const items = new Array(NUMBER_OPTIONS).fill().map((_, index) => index);

let startDivId;

items.forEach((item) => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    itemDiv.draggable = true;
    itemDiv.textContent = `Item ${item}`;
    itemDiv.id = `item-${item}`;
    itemDiv.classList.add(`${item}`)

    // Store the ID of the dragged element
    itemDiv.addEventListener('dragstart', (e) => {
        startDivId = e.target.id
    });

    // Handle the drop event
    itemDiv.addEventListener('dragover', (e) => {
        e.preventDefault(); 
    });

    itemDiv.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggedElement = document.getElementById(startDivId);
        if(startDivId !== e.target.id){
            itemHolder.insertBefore(draggedElement, e.target);
        }
    });

    itemHolder.appendChild(itemDiv);
});
