# HTML Parsing - Normal, Async & Defer (V.Easy)

> Reference: https://youtu.be/IrHmpdORLu8?si=lpt4Dgjr2RHfwXrL

![image](https://github.com/user-attachments/assets/6708bd89-8322-416b-8b4f-c7d2f2ec6e74)


When including scripts (`<script>` tags) in an HTML document, they can load and execute in different ways: **normal, async, and defer**. The execution method affects how the page is loaded and rendered.

## **1. Normal Script Execution (Without async or defer)**

- The browser **pauses HTML parsing** when it encounters a script tag.
- It **fetches and executes the script immediately**.
- After execution, the browser **resumes HTML parsing**.
- This can **block rendering**, making the page load slower.

## **2. Async Script Execution (`async` attribute)**

- The script is **fetched in parallel** while HTML parsing continues.
- Once fetched, **HTML parsing pauses**, and the script **executes immediately**.
- Parsing resumes after execution.
- **Best for scripts that don’t depend on other scripts or DOM content**.

## **3. Defer Script Execution (`defer` attribute)**

- The script is **fetched in parallel** while HTML parsing continues.
- The script **executes only after HTML parsing is complete**.
- Multiple deferred scripts execute **in order**.
- **Best for scripts that need access to the fully loaded DOM**.

---

## Common Questions

#### **1. What is Async and Defer?**

- `async` and `defer` are attributes used in `<script>` tags to control how scripts are loaded and executed in an HTML document.
- They allow scripts to be **fetched while the HTML is still being parsed**, improving performance.

#### **2. Difference Between Async and Defer?**

| Feature                | `async`                                                  | `defer`                                     |
| ---------------------- | -------------------------------------------------------- | ------------------------------------------- |
| **Fetching**           | Happens in parallel with HTML parsing                    | Happens in parallel with HTML parsing       |
| **Execution Timing**   | Executes **as soon as it’s downloaded**, pausing parsing | Executes **after HTML parsing is complete** |
| **Order of Execution** | Order is **not guaranteed**                              | Order is **maintained**                     |
| **Use Case**           | Independent scripts (e.g., analytics, ads)               | Scripts that depend on DOM elements         |

#### **3. When Should I Use Defer Over Async?**

- Use `defer` when the script **depends on the DOM** or needs to execute **in order** with other scripts.
- Example: A script that modifies elements in the DOM (`document.getElementById()`).

#### **4. Examples of Scenarios Covering Async and Defer**

- **Using `async` (Good for analytics, ads, third-party scripts)**:

  ```html
  <script async src="analytics.js"></script>
  ```

  - The script loads while the HTML is parsing and executes immediately when ready.

- **Using `defer` (Good for scripts that need full DOM access, like UI logic)**:
  ```html
  <script defer src="app.js"></script>
  ```
  - The script loads while the HTML is parsing but executes only after the page is fully parsed.

Would you like a markdown version of this for your notes? 🚀
