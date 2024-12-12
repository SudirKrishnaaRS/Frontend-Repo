# CSS Rules

#### Definition

CSS rules are the building blocks of stylesheets. A CSS rule is a set of properties applied to one or more HTML elements to define their appearance. It consists of a **selector** and a **declaration block**.

---

### Structure of a CSS Rule

```css
selector {
  property: value;
}
```

#### Example:

```css
p {
  color: blue;
  font-size: 16px;
}
```

- **Selector**: Specifies which HTML elements the rule applies to (e.g., `p` applies to all `<p>` elements).
- **Property**: A style attribute to modify (e.g., `color`, `font-size`).
- **Value**: The desired value for the property (e.g., `blue`, `16px`).

---

### Specificity and Importance

1. **Specificity**: Determines which rule is applied when multiple rules target the same element.

   - **Order of specificity**: Inline styles > IDs > Classes/Pseudo-classes/Attributes > Elements/Pseudo-elements.
   - Example:
     ```html
     <p id="main" class="text">Hello</p>
     ```
     ```css
     p {
       color: red;
     } /* Least specific */
     .text {
       color: green;
     } /* More specific */
     #main {
       color: blue;
     } /* Most specific */
     ```

2. **!important**: Overrides all other rules (use sparingly).
   ```css
   p {
     color: red !important;
   }
   ```

---

### Common Interview Questions and Answers

1. **What are CSS rules?**

   - CSS rules define styles for HTML elements using selectors and declarations.

2. **What is specificity in CSS?**

   - Specificity is the measure of importance of a CSS rule, determining which rule takes precedence.

3. **What is the difference between a class selector and an ID selector?**

   - A class selector applies to multiple elements, while an ID selector is unique to one element.

4. **How do pseudo-classes differ from pseudo-elements?**

   - **Pseudo-classes** target an element's state (e.g., `:hover`), while **pseudo-elements** target specific parts of an element (e.g., `::before`).

5. **When should you use the `!important` rule?**
   - Use `!important` sparingly to override other styles, usually in debugging or third-party CSS.
