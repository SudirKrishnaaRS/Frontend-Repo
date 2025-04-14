document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.querySelector(".todo-form");
  const todoInput = document.querySelector(".todo-input");
  const todoSubmit = document.querySelector(".todo-submit");
  const todoList = document.querySelector(".todo-list");

  let editMode = false;
  let editItem = null;

  todoForm.addEventListener("submit", () => {
    event.preventDefault(); // prevent the default behaviour of reload when submission of form

    const todoInputValue = todoInput.value.trim(); // trim the input for leading & trailing space
    if (todoInputValue !== "") {
      if (editMode) {
        // Edit Item
        editItem.firstChild.textContent = todoInputValue;
        editMode = false;
        editItem = null;

        todoSubmit.innerText = "Add Todo";
      } else {
        // ADD Item
        addItem(todoInputValue);
      }

      todoInput.value = ""; // once the item is added to list, erase the input value
    } else {
      alert("Enter a valid input"); // If the input is empty then ALERT the user
    }
  });

  todoList.addEventListener("click", (event) => {
    console.log(event);
    const target = event.target;
    if (target.tagName === "BUTTON") {
      const todoItem = target.parentNode;
      if (target.innerText === "❌") {
        //Remove
        todoItem.remove();
      } else if (target.innerText === "✏️") {
        // Edit
        editMode = true;
        editItem = todoItem;
        todoInput.value = todoItem.firstChild.textContent;
        todoInput.focus();
        todoSubmit.innerHTML = `Edit Item`;
      }
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
