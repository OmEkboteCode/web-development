# Sigma Notes: React (Part 3) ⚛️

These notes cover all 11 topics shown in your lecture list, with beginner-friendly explanations, syntax, examples, and important takeaways.

Study notes • React events, state, hooks, rendering, and JavaScript closures

## 1. Handling Click Events

React allows us to respond to user interactions using event handlers.

For example, when a user clicks a button, we can execute a function.

```js
function App() {
  function handleClick() {
    console.log("Button clicked!");
  }

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}
```

### Important rules

- Use `onClick` to handle click events.
- Event names use camelCase.
- Pass the function reference: `onClick={handleClick}`.
- Do not call the function directly: `onClick={handleClick()}`. That executes it during rendering rather than waiting for a click.

### Passing arguments to event handlers

```js
function App() {
  function greet(name) {
    console.log(`Hello, ${name}!`);
  }

  return (
    <button onClick={() => greet("Alice")}>
      Greet
    </button>
  );
}
```

The arrow function allows us to call `greet()` when the button is clicked.

Remember: Defining a function and executing a function are two different things.

## 2. Handling Non-Click Events

React supports many events besides clicks.

| Event          | Purpose                                    |
| -------------- | ------------------------------------------ |
| `onChange`     | Respond to changes in an input             |
| `onSubmit`     | Respond to form submission                 |
| `onMouseEnter` | Respond when the pointer enters an element |
| `onMouseLeave` | Respond when the pointer leaves an element |
| `onKeyDown`    | Respond when a key is pressed down         |
| `onFocus`      | Respond when an element receives focus     |
| `onBlur`       | Respond when an element loses focus        |

### Example: Input change

```js
function App() {
  function handleChange(event) {
    console.log(event.target.value);
  }

  return (
    <input onChange={handleChange} />
  );
}
```

When the user types, the handler can inspect the input's current value.

### Example: Form submission

```js
function App() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input />
      <button type="submit">Submit</button>
    </form>
  );
}
```

`event.preventDefault()` prevents the browser's default form-submission behavior, which normally navigates or reloads the page.

Key takeaway: Event handlers let React components respond to user interactions.

## 3. Event Object

When an event occurs, React passes an event object to the event handler. It contains information about that event.

```jsx
function App() {
  function handleClick(event) {
    console.log(event);
    console.log(event.type);
    console.log(event.target);
  }

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}
```

### Important properties and methods

| Property or method        | Meaning                                          |
| ------------------------- | ------------------------------------------------ |
| `event.type`              | The type of event, such as `"click"`             |
| `event.target`            | The element where the event originated           |
| `event.currentTarget`     | The element whose handler is currently executing |
| `event.preventDefault()`  | Prevents the browser's default action            |
| `event.stopPropagation()` | Stops the event from propagating further         |

### `target` vs `currentTarget`

- `target` identifies the element where the event originated.
- `currentTarget` identifies the element whose event handler is running.

These can differ when events bubble from a child element to a parent.

### Passing the event object

React supplies the event object automatically when you pass a handler function directly.

```jsx
<button onClick={handleClick}>Click</button>
```

You can also receive it in an arrow function:

```jsx
<button onClick={(event) => handleClick(event)}>
  Click
</button>
```

## 4. State in React

State is data that a component remembers between renders. When state changes, React can render the component again to reflect the updated data.

OR

The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.

Examples of state include:

- A like button's count.
- Whether a menu is open.
- The text entered into a search box.
- Whether a user has selected an option.

### Why ordinary variables are insufficient

Consider this component:

```jsx
function App() {
  let count = 0;

  function increase() {
    count++;
    console.log(count);
  }

  return (
    <button onClick={increase}>
      Count: {count}
    </button>
  );
}
```

The variable can increase, but changing it does not tell React to update the displayed count. Also, a new render creates a new local variable.

React state solves both problems by preserving the value between renders and triggering a re-render when it changes.

Mental model:

State changes

React schedules a re-render

The component runs again

The UI reflects the updated state

A re-render does not necessarily mean the entire DOM is rebuilt. React updates the necessary parts of the interface.

## 5. Hooks

Hooks are special React functions that let function components use React features, such as state.

Examples include:

- `useState()` for state.
- `useEffect()` for synchronizing with external systems.
- `useContext()` for accessing context.

This lecture section focuses particularly on `useState()`.

### Rules of Hooks

1. Call hooks at the top level of a React component or a custom hook.
2. Do not call hooks inside loops, conditions, or nested functions.
3. Call hooks from React function components or custom hooks, not ordinary event handlers.

Correct:

```jsx
function App() {
  const [count, setCount] = useState(0);

  return <p>{count}</p>;
}
```

Incorrect:

```jsx
function App() {
  if (true) {
    const [count, setCount] = useState(0);
  }

  return <p>Hello</p>;
}
```

The second example violates the Rules of Hooks.

## 6. `useState()`

The `useState` hook lets a component store and update state. 

or
It lets you add a state variable to your component.

### Returns 
- useState returns an array with exactly two values:

1. The current state. During the first render, it will match the initialState you have passed.
2. The set function that lets you update the state to a different value and trigger a re-render.

First, import it:

```jsx
import { useState } from "react";
```

### Syntax

```jsx
const [state, setState] = useState(initialValue);
```

- `state`: the current state value for this render.
- `setState`: the function used to request a state update.
- `initialValue`: the initial state value.

### Example: Counter

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increase}>
        Increase
      </button>
    </div>
  );
}

export default Counter;
```

### How it works

1. Initially, `count` is `0`.
2. The user clicks the button.
3. `setCount(count + 1)` requests an update.
4. React renders the component again.
5. The new render receives the updated count.

### Updating state

For a simple value:

```jsx
setCount(count + 1);
```

For an update based on the previous state:

```jsx
setCount((previousCount) => previousCount + 1);
```

The second approach is particularly useful when the next value depends on the previous value.

### Common mistake

Do not mutate state directly:

```jsx
count = count + 1; // Incorrect
```

Instead, use the setter:

```jsx
setCount(count + 1);
```

Important: State setters request updates. They do not immediately change the state variable in the currently executing render.

## 7. Activity: Create LikeButton

This activity combines event handling, state, and conditional rendering.

### Objective

Build a button that lets a user like and unlike a post.

### Requirements

- Start with the post unliked.
- Display a `Like` button when unliked.
- Display a `Liked` button or indicator when liked.
- Clicking the button toggles between the two states.
- Update the interface using React state.
- Use conditional rendering to display the current status.
- Style the liked and unliked states differently.

### Suggested behavior

My first React post

Try the button to preview the expected behavior.

&#x20;Like ♡

Preview state: Not liked

The interactive example illustrates the target behavior. Your own implementation should use `useState()` and an event handler.

### Testing checklist

- Does the initial state display correctly?
- Does the first click change the state?
- Does the second click reverse it?
- Does the styling match the current state?
- Does the UI update without manually modifying the DOM?

## 8. Closure in JavaScript

A closure occurs when a function retains access to variables from the scope in which it was created, even after that outer function has finished executing.

OR

Feature in js where an inner function has access to the outer(enclosing) function's variable

- In JS, once a function completes its execution, any variables that were defined inside the function scope cease to exist.

### Example

```jsx
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3
```

### What happens?

1. `outer()` creates the variable `count`.
2. `outer()` returns the `inner` function.
3. The returned function retains access to `count`.
4. Each call to `counter()` updates the same retained variable.

That retained access is a closure.

### Why closures matter in React

Event handlers and callbacks can access variables from the render in which they were created.

For example:

```jsx
function App() {
  const [count, setCount] = useState(0);

  function showCount() {
    console.log(count);
  }

  return (
    <button onClick={showCount}>
      Show count
    </button>
  );
}
```

The `showCount` function closes over the `count` value from that render.

When React renders the component again, it creates a new set of local variables and a new handler that sees the new render's state.

This concept is important for understanding state updates, callbacks, and stale closures.

## 9. Re-render: How Does It Work?

A render is when React calls a component to determine what UI it should display.

### What can trigger a re-render?

Common causes include:

- A component's state changes.
- Its parent re-renders, causing the child to be rendered again in the usual case.
- A context value it uses changes.

### Example

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  console.log("Component rendered");

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

When the button is clicked:

1. The setter requests a state update.
2. React schedules the component to render again.
3. The component function runs again.
4. React calculates the new UI.
5. React updates the relevant DOM if necessary.

### Important distinctions

Re-rendering is not the same as reloading the page.

A re-render does not automatically reset state. React preserves state between renders when the component remains at the same position in the component tree with the same identity.

Also, calling a setter with a value equal to the current state may allow React to skip a render.

Remember: A component function running again does not mean all its state is recreated from the initial values.

## 10. Callback in the State Setter Function

How to change state when it depends on the current value

Sometimes, multiple state updates happen within the same event handler. React may batch updates, so repeatedly using the current render's state can produce surprising results.

### Example: The potential problem

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  function increaseThreeTimes() {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }

  return (
    <button onClick={increaseThreeTimes}>
      Count: {count}
    </button>
  );
}
```

If `count` starts at `0`, these three calls each calculate `0 + 1`. They request the same next value, so the count typically increases by only `1`.

### The solution: Functional updater

```jsx
function increaseThreeTimes() {
  setCount((previousCount) => previousCount + 1);
  setCount((previousCount) => previousCount + 1);
  setCount((previousCount) => previousCount + 1);
}
```

Now React processes the updates in sequence:

| Update | Previous value | Next value |
| ------ | -------------- | ---------- |
| First  | 0              | 1          |
| Second | 1              | 2          |
| Third  | 2              | 3          |

The final count becomes `3`.

### General syntax

```jsx
setState((previousState) => {
  return nextState;
});
```

You can also use the concise form:

```jsx
setCount((previousCount) => previousCount + 1);
```

Rule of thumb: When the next state depends on the previous state, prefer the functional updater.

React expects updater functions to be pure. Do not perform side effects inside them.

## 11. More About State

This topic brings together the important rules for working with React state.

### A. State is a snapshot

Each render receives a snapshot of the state.

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
    console.log(count);
  }

  return (
    <button onClick={increase}>
      {count}
    </button>
  );
}
```

If `count` is `0` before the click, the log inside that handler still prints `0`. The setter requests an update for the next render. It does not rewrite the `count` variable in the running handler.

### B. State updates are scheduled

React can group multiple state updates together. Do not rely on the DOM changing immediately after a setter call.

### C. State should not be mutated directly

For primitive values:

```jsx
setCount(count + 1);
```

For objects, create a new object:

```jsx
setUser({
  ...user,
  name: "Alice"
});
```

For arrays, create a new array rather than modifying the existing state array directly.

```jsx
setItems([...items, newItem]);
```

These object and array examples are useful extensions of the core state rules.

### D. State is separate for each component instance

If you render two independent instances of a counter component, each can maintain its own state.

### E. State belongs to React, not the local variable

The setter tells React that the value needs to change and allows React to schedule the appropriate render.

# Quick Revision Sheet

| Concept            | Remember                                                                            |
| ------------------ | ----------------------------------------------------------------------------------- |
| Click events       | Use `onClick={handler}`                                                             |
| Non-click events   | Examples include `onChange`, `onSubmit`, and `onKeyDown`                            |
| Event object       | Provides event information such as `target` and `type`                              |
| State              | Data React preserves between renders                                                |
| Hooks              | Special functions that let components use React features                            |
| `useState`         | Returns the current state and a setter                                              |
| LikeButton         | Combines events, state, and conditional rendering                                   |
| Closure            | A function retains access to its lexical scope                                      |
| Re-render          | React calls the component again to determine the UI                                 |
| Functional updater | Calculates the next state from the previous state                                   |
| State snapshot     | The current render's state variable does not change immediately after a setter call |

