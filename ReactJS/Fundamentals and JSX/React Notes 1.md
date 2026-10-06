# React


JS Library for creating UI

react.dev

## Components
- React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map().

- component -> functions(reusable) 

- invoke-> render(display)

### Hierarchy

# React — Part 1: Fundamentals and JSX

Beginner-friendly notes for the Sigma 12 lecture section. These notes cover the listed topics using standard React concepts.

## 1. What Is React?

**React** is a JavaScript library for building user interfaces. It helps you create screens from small, reusable pieces called **components**.

A React interface is often described as a tree:

```text
App
├── Header
├── Main
│   ├── ProfileCard
│   └── Button
└── Footer
```

When data changes, React updates the parts of the interface that depend on that data.

**Why use React?**

- Breaks interfaces into reusable components
- Keeps UI code organized
- Updates the page when data changes
- Has a large ecosystem and community

React is a library, not a complete application framework. A React app may use other tools for routing, data fetching, and project setup.

## 2. What Is JSX?
- JavaScript Extension Syntax

**JSX** is a syntax extension that lets you write markup-like code inside JavaScript. React uses it to describe what should appear on the screen.

```jsx
const heading = <h1>Hello, React!</h1>;
```

JSX is transformed into JavaScript by the project’s build tools. Browsers do not run JSX directly.

JSX looks like HTML, but it follows some different rules:

- Return one parent element, or use a fragment.
- Close every tag, including self-closing tags like `<img />`.
- Use `className` instead of `class`.
- Use camelCase for most DOM properties, such as `onClick`.

```jsx
function Greeting() {
  return (
    <section className="greeting">
      <h1>Hello!</h1>
      <img src="/profile.png" alt="Profile" />
    </section>
  );
}
```

## 3. Set Up a Local Environment

A local React environment typically includes:

Vite

For example, Vite can create a starter React project:

```bash
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev
```

Open the local address printed in the terminal to view the app.

The exact setup can vary by course or project. Follow the setup instructions for the project you are using.

## 4. Understanding the App

A starter React project usually contains files with roles like these:

- **`src/main.jsx`**: Starts the React app and attaches it to the page.
- **`src/App.jsx`**: The main application component.
- **`src/index.css` or `src/App.css`**: Styles for the app.
- **`index.html`**: The HTML page containing the root element.

A simplified entry point may look like this:

```jsx
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);
```

The HTML file needs a matching element:

```html
<div id="root"></div>
```

React renders the `App` component inside that element.

## 5. Rewriting the App

The starter `App` component is often a demonstration. You can replace its content with your own interface.

```jsx
function App() {
  return (
    <main>
      <h1>My First React App</h1>
      <p>I am learning to build interfaces with React.</p>
    </main>
  );
}

export default App;
```

After saving the file, the development server usually refreshes the page automatically.

## 6. Our First Component

A **component** is a reusable and independent function that returns JSX.

```jsx
function Welcome() {
  return <h2>Welcome to my app</h2>;
}
```

Use the component as a JSX element:

```jsx
function App() {
  return (
    <main>
      <Welcome />
      <p>Here is the rest of the page.</p>
    </main>
  );
}
```
- rendering a component <Welcome></Welcome> or <Welcome/>

Component names must begin with a capital letter. Lowercase names such as `<welcome />` are treated as built-in HTML tags.

A component should return valid JSX. If it needs to return multiple neighboring elements, wrap them in a parent element or a fragment.

## 7. Import and Export

JavaScript modules let files share components and other values.

### Default export

A file can have one default export:

```jsx
// Welcome.jsx
function Welcome() {
  return <h2>Welcome!</h2>;
}

export default Welcome;
```

Import it without braces:

```jsx
import Welcome from "./Welcome.jsx";
```

### Named export

A file can export named values:

```jsx
// components.jsx
export function Header() {
  return <header>My Site</header>;
}

export function Footer() {
  return <footer>Copyright</footer>;
}
```

Import them using braces:

```jsx
import { Header, Footer } from "./components.jsx";
```

The import name for a default export can be chosen by the importing file. Named exports must match the exported name unless you rename them during import.

## 8. Writing Markup in JSX

JSX lets you describe the structure of your interface using familiar tags.

```jsx
function Profile() {
  return (
    <article>
      <h2>Sam Lee</h2>
      <p>Frontend developer</p>
      <button type="button">Contact</button>
    </article>
  );
}
```

Keep these JSX rules in mind:

1. **Wrap multiple elements.**

   ```jsx
   return (
     <div>
       <h1>Title</h1>
       <p>Text</p>
     </div>
   );
   ```

2. **Close every tag.**

   ```jsx
   <input />
   <img src="/photo.jpg" alt="A landscape" />
   ```

3. **Use `className` for CSS classes.**

   ```jsx
   <div className="card">Content</div>
   ```

4. **Use braces to put JavaScript expressions inside JSX.**

   ```jsx
   <p>{2 + 3}</p>
   ```

## 9. React Fragments

A component sometimes needs to return several elements without adding another HTML element to the page. Use a **fragment** for that.

```jsx
function Details() {
  return (
    <>
      <h2>Details</h2>
      <p>More information goes here.</p>
    </>
  );
}
```

The short fragment syntax `<>...</>` groups elements without creating an extra DOM node. You can also write:

```jsx
import { Fragment } from "react";

function Details() {
  return (
    <Fragment>
      <h2>Details</h2>
      <p>More information goes here.</p>
    </Fragment>
  );
}
```

The named form is useful when a fragment needs a `key`, such as when rendering items in a list.

## 10. JSX with Curly Braces

Curly braces, `{}`, let you use a JavaScript **expression** inside JSX.

```jsx
const name = "Mira";

function Greeting() {
  return <h1>Hello, {name}!</h1>;
}
```

You can use expressions such as variables, calculations, and function calls:

```jsx
const price = 25;

function Price() {
  return <p>Total: {price * 2}</p>;
}
```

You can also use expressions for attributes:

```jsx
const imageUrl = "/images/plant.jpg";

function PlantPhoto() {
  return <img src={imageUrl} alt="A green plant" />;
}
```

Braces accept expressions that produce a value. They do **not** directly accept statements such as `if` or `for`. For conditional content, use a ternary expression or `&&`:

```jsx
function Status({ isOnline }) {
  return <p>{isOnline ? "Online" : "Offline"}</p>;
}
```

## 11. Structuring Components

Split an interface into components when a part has a clear purpose or needs to be reused.

```jsx
function Header() {
  return <header><h1>Recipe Book</h1></header>;
}

function RecipeCard() {
  return (
    <article>
      <h2>Vegetable Soup</h2>
      <p>A simple, warm lunch.</p>
    </article>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <RecipeCard />
      </main>
    </>
  );
}
```

Helpful habits:

- Give each component one clear responsibility.
- Use descriptive, capitalized component names.
- Keep related components and styles organized.
- Avoid splitting every single HTML tag into its own component.
- Use props to pass information to components as your app grows.

Example with a prop:

```jsx
function Greeting({ name }) {
  return <p>Hello, {name}!</p>;
}

function App() {
  return <Greeting name="Mira" />;
}
```

## 12. Styling Components

React components can be styled with regular CSS. Add a `className` in JSX and define the class in a CSS file.

```jsx
function Button() {
  return <button className="primary-button">Save</button>;
}
```

```css
.primary-button {
  background-color: navy;
  color: white;
  border: 0;
  border-radius: 6px;
  padding: 0.6rem 1rem;
}
```

Import the stylesheet into the app or component:

```jsx
import "./App.css";
```

For a small number of dynamic styles, you can use the `style` prop. Its value is a JavaScript object, and CSS property names use camelCase:

```jsx
function Notice() {
  return (
    <p style={{ color: "darkgreen", fontSize: "1.2rem" }}>
      Changes saved.
    </p>
  );
}
```

Use CSS classes for most styling. Inline styles are best when a style depends on a value or needs to be set directly.

## Key Takeaways

- React interfaces are built from reusable components.
- Components are JavaScript functions that return JSX.
- JSX resembles HTML but follows JavaScript and JSX rules.
- Use `className`, close tags, and wrap sibling elements.
- Use fragments to group elements without adding a DOM element.
- Put JavaScript expressions in JSX using `{}`.
- Use imports and exports to organize code across files.
- Add styles with CSS classes and `className`.
- Component names begin with a capital letter.