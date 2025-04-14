document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.querySelector(".todo-form");
  const todoInput = document.querySelector(".todo-input");
  const todoSubmit = document.querySelector(".todo-submit");
  const todoList = document.querySelector(".todo-list");

  todoForm.addEventListener("submit", () => {
    event.preventDefault();

    const todoInputValue = todoInput.value.trim();
    if (todoInputValue !== "") {
      addItem(todoInputValue);

      todoInput.value = "";
    } else {
      alert("Enter a valid input");
    }
  });

  const addItem = (todoInputValue) => {
    const listItem = document.createElement("li");
    const editButton = document.createElement("button");
    const removeButton = document.createElement("button");

    listItem.innerHTML = `<span>${todoInputValue}</span>`;
    editButton.innerHTML = `✏️`;
    removeButton.innerHTML = `❌`;

    listItem.appendChild(editButton);
    listItem.appendChild(removeButton);

    todoList.appendChild(listItem);
  };
});
