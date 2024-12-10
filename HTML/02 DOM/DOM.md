# DOM (Document Object Model)

#### Definition

The DOM represents the structure of a document as a tree of objects that can be manipulated using JavaScript.

#### Key Concepts

1. **Tree Structure**:

   - The DOM represents an HTML document as a tree of nodes, starting from the `document` object.
   - Nodes can be element nodes, text nodes, or comment nodes.

2. **DOM Nodes**:

   - **Document Node**: Represents the entire document (e.g., `document`).
   - **Element Node**: Represents HTML elements (e.g., `<div>`, `<p>`).
   - **Text Node**: Represents text inside elements.
   - **Attribute Node**: Represents element attributes.

3. **DOM Methods**:

   - Selecting elements:
     - `document.getElementById("id")`
     - `document.querySelector("selector")`
     - `document.querySelectorAll("selector")`
   - Modifying elements:
     - `element.innerHTML` (sets or gets HTML content).
     - `element.textContent` (sets or gets text content).
     - `element.style.property` (changes inline styles).
   - Adding/Removing Elements:
     - `document.createElement("tag")`
     - `parent.appendChild(newElement)`
     - `parent.removeChild(child)`

4. **Event Handling**:
   - `addEventListener(event, callback)` attaches event listeners.
   - Common events: `click`, `mouseover`, `keydown`, `DOMContentLoaded`.

#### Benefits

1. Dynamic content manipulation.
2. Enables interaction between users and the webpage.
3. Foundation for frameworks like React and Angular.

#### Gotchas

- Accessing elements before the DOM is loaded can cause errors (use `DOMContentLoaded` or place scripts at the end of the body).
- Modifying the DOM directly can lead to performance issues in large, complex applications.

#### Example Code

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM Example</title>
  </head>
  <body>
    <button id="addItem">Add</button>
    <ul id="list">
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>

    <script>
      const list = document.getElementById("list");

      const addButton = document.getElementById("addItem");

      // Adding a new Item to the list on button click
      addButton.addEventListener("click", () => {
        const newItem = document.createElement("li");
        newItem.innerHTML = "New Item";
        list.appendChild(newItem);
      });
    </script>
  </body>
</html>
```

#### Common Interview Questions and Answers

1. **What is the DOM?**  
   The DOM is an API that represents the structure of an HTML or XML document as a tree, enabling JavaScript to access and manipulate elements, styles, and events dynamically.

2. **How do you select elements in the DOM?**

   - Use methods like `getElementById()`, `querySelector()`, or `querySelectorAll()`. For example, `document.querySelector('.className')` selects the first element with the class `className`.

3. **What is the difference between `innerHTML` and `textContent`?**

   - `innerHTML`: Sets or gets the HTML content, including tags.
   - `textContent`: Only sets or gets the text, ignoring tags.

4. **How do you add a new element to the DOM?**

   - Use `document.createElement()` to create a new element and `appendChild()` to add it to the parent node.

5. **What is the difference between `addEventListener` and `onclick`?**
   - `onclick` overwrites any existing click handler, while `addEventListener` allows multiple handlers for the same event.
