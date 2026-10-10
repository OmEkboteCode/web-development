# React Fundamentals: Props, Arrays & Dynamic Rendering

## 1. React Props

**Props** are used to pass data from a **parent component to a child component or pass to a JSX tag**.

```jsx
function Card(props) {
  return <h2>{props.title}</h2>;
}

function App() {
  return <Card title="Amazon Card" />;
}
```

### Using destructuring

```jsx
function Card({ title, price }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>₹{price}</p>
    </div>
  );
}
```

- Props are **read-only**.
- A child component should not modify its props.
- Props make components reusable.

---

## 2. Passing Arrays to Props

An array can be passed as a prop.

```jsx
function App() {
  const items = ["Laptop", "Phone", "Tablet"];

  return <ProductList items={items} />;
}
```

The child receives it:

```jsx
function ProductList({ items }) {
  return <p>{items[0]}</p>;
}
```

Objects can also be passed inside arrays:

```jsx
const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 }
];

<ProductList products={products} />
```

---

## 3. Rendering Arrays

React can render multiple elements by using JavaScript's `map()`.

```jsx
const names = ["Alice", "Bob", "Charlie"];

function App() {
  return (
    <div>
      {names.map((name) => (
        <p>{name}</p>
      ))}
    </div>
  );
}
```

### Using `key`

When rendering lists, give each element a unique `key`.

```jsx
{names.map((name, index) => (
  <p key={index}>{name}</p>
))}
```

For objects, preferably use a unique ID:

```jsx
{products.map((product) => (
  <div key={product.id}>
    <h3>{product.name}</h3>
    <p>{product.price}</p>
  </div>
))}
```

**Important:** `key` helps React identify individual elements in a list.

---

## 4. Conditional Rendering

Conditional rendering means displaying something **only when a condition is true**.

### Using `if`

```jsx
function Message({ loggedIn }) {
  if (loggedIn) {
    return <h2>Welcome!</h2>;
  }

  return <h2>Please log in.</h2>;
}
```

### Ternary operator

```jsx
{loggedIn ? <p>Welcome!</p> : <p>Please log in.</p>}
```

### Logical `&&`

```jsx
{loggedIn && <p>Welcome!</p>}
```

The element appears only when `loggedIn` is truthy.

---

## 5. Dynamic Component Styling

React can apply styles dynamically based on values or conditions.

### Dynamic class

```jsx
function Button({ active }) {
  return (
    <button className={active ? "active" : "inactive"}>
      Button
    </button>
  );
}
```

### Inline styles

```jsx
function Button({ active }) {
  return (
    <button
      style={{
        backgroundColor: active ? "green" : "gray"
      }}
    >
      Button
    </button>
  );
}
```

Styles can therefore change depending on **props, state, or other values**.

---

## 6. Activity

The activity applies the concepts learned in the module by combining:

- Props
- Arrays
- Array rendering
- Conditional rendering
- Dynamic styling

---

## 7. React Developer Tools

**React Developer Tools** is a browser extension used to inspect React applications.

It allows you to:

- Inspect components
- View component hierarchy
- Inspect props
- Inspect state
- Debug React components

It adds React-specific inspection capabilities to the browser's developer tools.

---

## 8. Activity: Amazon Cards

The Amazon Cards activity applies the previous concepts to create reusable product cards.

A product can be represented as an object:

```jsx
const product = {
  title: "Laptop",
  price: 50000,
  available: true
};
```

The data can be passed to a reusable component:

```jsx
<ProductCard product={product} />
```

The component can then:

- Receive the product through **props**
- Display product information
- Render multiple products using **arrays and `map()`**
- Use **conditional rendering** for product conditions
- Apply **dynamic styling** based on product data