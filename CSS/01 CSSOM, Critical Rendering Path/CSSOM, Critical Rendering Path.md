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

### Key Concepts:

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
