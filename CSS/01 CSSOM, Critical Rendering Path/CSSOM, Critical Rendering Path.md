# CSS Object Model (CSSOM) & Critical Rendering Path (CRP)

## What is CSSOM?

- A set of web APIs that allows JavaScript to manipulate CSS styles.
- Works in conjunction with the DOM to render web pages.
- Involved in the critical rendering path, a series of steps the browser takes to display a webpage.

### CSSOM Use Cases

- JavaScript can manipulate CSS styles through the CSSOM API.
- Common use cases:
  - Dynamically changing styles based on user interaction or other events.
  - Creating custom animations and transitions.
  - Implementing responsive design techniques.

## CSSOM + DOM = Render Tree

![image](https://github.com/user-attachments/assets/5f68e300-e340-4050-b37c-fe6d57bddf73)

### Key Concepts

- **Critical Rendering Path:**

  - The process of converting HTML, CSS, and JavaScript into pixels.
  - Involves DOM, CSSOM, layout, and paint stages.

- **User-Agent Stylesheet:**

  - Default styles applied by the browser.

- **Author Stylesheet:**

  - Custom styles defined by the developer.

# Critical Rendering Path (CRP) (**How CSSOM Works:**)

1. **HTML Parsing:**
   - The browser parses the HTML file to create the DOM tree.
2. **CSS Parsing:**
   - The browser parses the CSS file to create the CSSOM tree.
3. **Render Tree (DOM and CSSOM Merging):**
   - The browser merges the DOM and CSSOM trees to create the render tree.
4. **Layout:**
   - The browser calculates the size and position of each element in the render tree.
5. **Paint:**
   - The browser paints the pixels on the screen.

![image](https://github.com/user-attachments/assets/ed0c0e09-291a-4c31-989a-03bcfab0d023)

> Reference : https://www.lambdatest.com/blog/css-object-model/

### CRP Steps in a NutShell

1. Parse HTML → Create DOM.
2. Parse CSS → Create CSSOM.
3. Combine DOM and CSSOM → Generate Render Tree.
4. Layout → Calculate element positions.
5. Paint → Render elements on the screen.

## CSSOM interview questions

**1. Explain the concept of the critical rendering path and how CSSOM fits into it.**

The critical rendering path (CRP) is the series of steps a browser takes to render a webpage. It involves the following stages:

1. **HTML Parsing:** The browser parses the HTML file to create the DOM tree.
2. **CSS Parsing:** The browser parses the CSS file to create the CSSOM tree.
3. **DOM and CSSOM Merging:** The browser merges the DOM and CSSOM trees to create the render tree.
4. **Layout:** The browser calculates the size and position of each element in the render tree.
5. **Paint:** The browser paints the pixels on the screen.

CSSOM plays a crucial role in the CRP by providing the styling information that the browser needs to render the page accurately.

**2. How does JavaScript interact with CSSOM?**

JavaScript can manipulate CSS styles through the CSSOM API. This API provides access to the stylesheets, rules, and declarations that make up a page's style information.

Here's a simple example of how to dynamically change a CSS style using JavaScript and CSSOM:

```javascript
const element = document.getElementById("myElement");
const style = window.getComputedStyle(element);
element.style.backgroundColor = "red";
```

**3. What are the benefits of using CSSOM?**

- **Dynamic Styling:** CSSOM allows you to dynamically change the style of elements on a page based on user interactions or other events.
- **Custom Animations and Transitions:** You can create complex animations and transitions using CSSOM and JavaScript.
- **Responsive Design:** CSSOM enables you to implement responsive design techniques to adapt your website to different screen sizes.
- **Improved Performance:** By understanding the CSSOM and its impact on the critical rendering path, you can optimize your website's performance.

**4. Can you give an example of how to dynamically change a CSS style using JavaScript and CSSOM?**

See the example in question 2.

**5. What is the difference between user-agent stylesheet and author stylesheet?**

- **User-Agent Stylesheet:**
  - Default styles applied by the browser.
  - Provides basic styling for elements like headings, paragraphs, and links.
- **Author Stylesheet:**
  - Custom styles defined by the developer.
  - Overwrites or extends the user-agent stylesheet to achieve a specific design.

**6. How can you dynamically modify styles in the CSSOM?**

- Use JavaScript to interact with `document.styleSheets` and manipulate rules via methods like `insertRule()` and `deleteRule()`.

**7. What is the difference between modifying CSSOM and inline styles?**

- Modifying the CSSOM changes styles globally, while inline styles affect only specific elements.

**8. How does modifying the CSSOM affect performance?**

- Changes to the CSSOM can trigger reflows and repaints, impacting performance. Minimize the number of changes and batch them where possible.

**9. What happens if there’s an error in a CSS rule?**

- The browser skips the invalid rule and continues parsing the rest of the CSS.
