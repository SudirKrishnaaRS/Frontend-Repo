# Critical Rendering Path (CRP)

#### Definition

- The Critical Rendering Path (CRP) is the sequence of steps the browser follows to render a webpage.
- It includes constructing the DOM and CSSOM, combining them into a Render Tree, and painting content to the screen.
- Optimizing CRP improves website performance and user experience.

---

## CRP Stages

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

1. Browser Parse HTML → Create DOM.
2. Parse CSS → Create CSSOM.
3. Combine DOM and CSSOM → Generate Render Tree.
4. Layout → Calculate element positions.
5. Paint → Render elements on the screen.

## CSSOM + DOM = Render Tree

![image](https://github.com/user-attachments/assets/5f68e300-e340-4050-b37c-fe6d57bddf73)

### How to Optimize CRP

1. **Minimize Critical Resources**:

   - Reduce the number of CSS and JavaScript files.
   - Inline critical CSS to prevent additional network requests.

2. **Optimize Delivery**:

   - Use HTTP/2 to load multiple resources concurrently.
   - Minify and compress files (e.g., Gzip).

3. **Prioritize Critical Content**:

   - Load above-the-fold content first.
   - Use the `async` or `defer` attributes for non-critical JavaScript.

4. **Reduce Render-Blocking Resources**:
   - Eliminate render-blocking CSS and JavaScript using techniques like critical CSS and code splitting.

---

### Common Performance Metrics

1. **First Paint (FP)**:

   - Time taken to render the first pixel on the screen.

2. **First Contentful Paint (FCP)**:

   - Time taken to render the first piece of DOM content (e.g., text or images).

3. **Largest Contentful Paint (LCP)**:

   - Time taken to render the largest visible content element.

4. **Time to Interactive (TTI)**:
   - Time when the page becomes fully interactive.

---

### Example of Optimization

#### Before Optimization

```html
<head>
  <link rel="stylesheet" href="styles.css" />
  <script src="script.js"></script>
</head>
```

#### After Optimization

```html
<head>
  <style>
    /* Inline critical CSS */
    body {
      font-family: Arial, sans-serif;
    }
  </style>
  <link
    rel="stylesheet"
    href="styles.css"
    media="print"
    onload="this.media='all'"
  />
  <script src="script.js" defer></script>
</head>
```

---

### Common Interview Questions and Answers

1. **What is the Critical Rendering Path?**

   - The CRP is the process of transforming HTML, CSS, and JavaScript into pixels displayed on the screen.

2. **Why is the Critical Rendering Path important?**

   - Optimizing CRP reduces page load times and improves the user experience, especially for first-time visitors.

3. **What are render-blocking resources?**

   - Resources like CSS and synchronous JavaScript that delay the construction of the Render Tree.

4. **How can you optimize the CRP for a faster page load?**

   - Inline critical CSS, defer non-essential JavaScript, and compress resources to reduce network load times.

5. **What is the difference between the DOM, CSSOM, and Render Tree?**
   - **DOM**: Represents the structure and content of the HTML.
   - **CSSOM**: Represents the styles of the document.
   - **Render Tree**: Combines DOM and CSSOM to include only visible elements for painting.
