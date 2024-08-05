const taskHolder = document.getElementById("task-holder");

document.getElementById("add-task-button").addEventListener("click", () => {
  const inputComponent = document.getElementById("input-component");
  if (inputComponent.value.length === 0) {
    alert("Value cannot be empty");
  }
  addTask(inputComponent.value);
  inputComponent.value = "";
});

const addTask = (taskInput) => {
  const taaskItem = document.createElement("div");
  taaskItem.textContent = taskInput;

  taskHolder.appendChild(taaskItem);
};
