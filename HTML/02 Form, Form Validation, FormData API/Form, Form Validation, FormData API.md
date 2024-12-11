## Question: Able to create Form in native HTML and submit without JS. Able to add validations to form. Knows how to use FormData API.

---

### **1. Create a Form in Native HTML and Submit Without JavaScript**

HTML forms can submit data to a server without JavaScript by specifying the `action` (server URL) and `method` (GET or POST).

#### Example:

```html
<form action="/submit" method="post">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />

  <button type="submit">Submit</button>
</form>
```

- The form sends data to the `/submit` endpoint when the submit button is clicked.
- Validation can be handled using native HTML attributes (`required`, `type`, etc.).

---

### **2. Add Validations to the Form Without JavaScript**

HTML provides built-in validation attributes that ensure user input meets specific criteria before submission.

#### Common Validation Attributes:

- `required`: Ensures the field is not empty.
- `pattern`: Validates input against a regex pattern.
- `maxlength` / `minlength`: Sets the max/min number of characters.
- `type`: Ensures specific input types like `email`, `url`, `number`, etc.
- `min` / `max`: Sets numerical range for inputs.

#### Example with Validations:

```html
<form action="/submit" method="post">
  <label for="username">Username (3-10 characters):</label>
  <input
    type="text"
    id="username"
    name="username"
    minlength="3"
    maxlength="10"
    required
  />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />

  <label for="age">Age (18-60):</label>
  <input type="number" id="age" name="age" min="18" max="60" required />

  <label for="password">Password (8+ characters, must include a number):</label>
  <input
    type="password"
    id="password"
    name="password"
    pattern="^(?=.*\d).{8,}$"
    required
  />

  <button type="submit">Submit</button>
</form>
```

- **Features:**
  - Username must be between 3-10 characters.
  - Email must follow the email format (e.g., `user@example.com`).
  - Age must be between 18 and 60.
  - Password must include at least one number and be 8+ characters.

---

### **3. Using the `FormData` API**

The `FormData` API is a modern JavaScript API to work with form data, allowing developers to handle form submissions dynamically.

#### Common Use Cases:

- Collect form data programmatically.
- Send data via `fetch` or `XMLHttpRequest`.
- Work with multipart/form-data for file uploads.

#### Example Usage:

```html
<form id="myForm">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required />

  <label for="profilePicture">Profile Picture:</label>
  <input type="file" id="profilePicture" name="profilePicture" />

  <button type="submit">Submit</button>
</form>

<script>
  const form = document.getElementById("myForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Create a FormData object
    const formData = new FormData(form);

    // Log form data key-value pairs
    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    // Send the data via fetch
    fetch("/submit", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  });
</script>
```

- **Features:**
  - `formData.entries()` iterates through all form fields.
  - Supports file uploads with `<input type="file">`.

---

### **Key Takeaways for Interviews**

- **Native HTML Form:**
  - Use `action` and `method` attributes to submit forms directly to a server.
- **Built-in Validation:**
  - Leverage attributes like `required`, `pattern`, `type`, `min`, etc., for client-side validation.
- **FormData API:**
  - Dynamically handle form data for custom processing or AJAX submissions.
  - Supports files and other complex data structures.

This demonstrates your capability to handle forms both natively and dynamically!
