document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.querySelector(".todo-form");
  const todoInput = document.querySelector(".todo-input");
  const todoSubmit = document.querySelector(".todo-submit");
  const todoList = document.querySelector(".todo-list");

  todoForm.addEventListener("submit", () => {
    event.preventDefault(); // prevent the default behaviour of reload when submission of form

    const todoInputValue = todoInput.value.trim(); // trim the input for leading & trailing space
    if (todoInputValue !== "") {
      addItem(todoInputValue);

      todoInput.value = ""; // once the item is added to list, erase the input value
    } else {
      alert("Enter a valid input"); // If the input is empty then ALERT the user
    }
  });

  //ADD an item to todo list
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
