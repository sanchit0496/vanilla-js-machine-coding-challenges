const taskHolder = document.getElementById("task-holder");

document.getElementById("add-task-button").addEventListener("click", () => {
  const inputComponent = document.getElementById("input-component");
  if (inputComponent.value.length === 0) {
    alert("Value cannot be empty");
    return;
  }
  addTask(inputComponent.value);
  inputComponent.value = "";
});

const addTask = (taskInput) => {
  const taskItem = document.createElement("div");

  taskItem.textContent = taskInput;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    console.log("clicked");
    taskHolder.removeChild(taskItem);
  });
  taskItem.appendChild(deleteButton);

  taskHolder.appendChild(taskItem);
};
