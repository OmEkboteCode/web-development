# Sigma Notes: React (Part 4) ⚛️

Objects & State • Arrays & State • Todo Application • Updating and Deleting Array Items

This module builds on `useState()` and teaches you how to manage objects and arrays inside React state. These concepts are essential when building real applications such as task managers, shopping carts, dashboards and social platforms.

## 1. Objects & State

In React, state can store objects, not just primitive values such as numbers and strings.

For example, a user might have multiple properties:

```
const [user, setUser] = useState({
  name: "Om",
  age: 20,
  city: "Bengaluru"
});
```

Here:

- `user` contains the current object.
- `setUser` updates the object state.
- `useState()` initializes the object.

### Accessing object properties

We can access properties using dot notation.

```
<p>{user.name}</p>
<p>{user.age}</p>
<p>{user.city}</p>
```

### Updating an object in state

React state should not be mutated directly.

Incorrect:

```
user.name = "Alice";
setUser(user);
```

This modifies the existing object instead of creating a new one.

Correct:

```
setUser({
  ...user,
  name: "Alice"
});
```

### Understanding the spread operator

The spread operator (`...`) copies the existing properties into a new object.

```
setUser({
  ...user,
  name: "Alice"
});
```

Suppose the original object is:

```
{
  name: "Om",
  age: 20,
  city: "Bengaluru"
}
```

The updated object becomes:

```
{
  name: "Alice",
  age: 20,
  city: "Bengaluru"
}
```

Only the `name` property changes. The other properties are preserved.

### Updating state using a callback

When the next state depends on the previous state, use a functional updater.

```
setUser((previousUser) => ({
  ...previousUser,
  age: previousUser.age + 1
}));
```

Important: The spread operation creates a shallow copy. If an object contains nested objects, you must also copy the nested objects you intend to update.

Example:

```
setUser({
  ...user,
  address: {
    ...user.address,
    city: "Hubballi"
  }
});
```

## 2. Arrays & State

React state can also store arrays.

For example, a list of tasks:

```
const [tasks, setTasks] = useState([
  "Study React",
  "Practise C++",
  "Read a book"
]);
```

We can display the array using `map()`.

```
function TaskList() {
  const [tasks, setTasks] = useState([
    "Study React",
    "Practise C++",
    "Read a book"
  ]);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task}>{task}</li>
      ))}
    </ul>
  );
}
```

### Adding an item to an array

Use the spread operator to create a new array containing the existing elements and the new item.

```
setTasks([...tasks, "Learn Node.js"]);
```

The original array remains unchanged.

Using a functional updater:

```
setTasks((previousTasks) => [
  ...previousTasks,
  "Learn Node.js"
]);
```

This is useful when the new array depends on the previous state.

### Important array operations

| Operation     | JavaScript method | React state approach  |
| ------------- | ----------------- | --------------------- |
| Add item      | `push()`          | Use spread syntax     |
| Delete item   | `splice()`        | Use `filter()`        |
| Update item   | Direct assignment | Use `map()`           |
| Find item     | `find()`          | Read without mutating |
| Display items | `map()`           | Render JSX elements   |

Golden rule: Never mutate an array or object directly when it is stored in React state. Create a new one instead.

## 3. Activity: Create a Todo Application

The Todo activity combines objects, arrays, state, and rendering.

A Todo application allows users to manage a list of tasks.

### Representing a task

Instead of storing tasks as simple strings, we can represent each task as an object.

```
const todos = [
  {
    id: 1,
    task: "Study React",
    completed: false
  },
  {
    id: 2,
    task: "Practise C++",
    completed: false
  },
  {
    id: 3,
    task: "Read a book",
    completed: true
  }
];
```

Each task contains:

| Property    | Purpose                      |
| ----------- | ---------------------------- |
| `id`        | Unique identifier            |
| `task`      | Task description             |
| `completed` | Whether the task is finished |

### Initializing state

```
const [todos, setTodos] = useState([
  { id: 1, task: "Study React", completed: false },
  { id: 2, task: "Practise C++", completed: false }
]);
```

### Rendering Todo items

```
{todos.map((todo) => (
  <div key={todo.id}>
    <p>{todo.task}</p>
  </div>
))}
```

### Todo application features

A typical Todo application can support:

1. Displaying all tasks.
2. Adding new tasks.
3. Deleting existing tasks.
4. Updating a particular task.
5. Marking tasks as completed.

The following sections explain the array operations used to implement these features.

## 4. Unique Key for List Items

When rendering lists in React, every item should have a unique `key`.

Example:

```
const names = ["Alice", "Bob", "Charlie"];

function App() {
  return (
    <div>
      {names.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </div>
  );
}
```

Here, `index` is used as the key for demonstration.

### Why does React need keys?

Imagine a list:

```
Study React
Practise C++
Read a book
```

Now suppose we delete the second item.

```
Study React
Read a book
```

React needs to identify which items were added, removed, or changed.

Keys help React match rendered elements with their corresponding data between renders.

### Preferred approach: Unique IDs

```
const todos = [
  { id: 101, task: "Study React" },
  { id: 102, task: "Practise C++" },
  { id: 103, task: "Read a book" }
];
```

Render using:

```
{todos.map((todo) => (
  <p key={todo.id}>{todo.task}</p>
))}
```

### Important rules

- Keys should be unique among siblings.
- Prefer stable IDs.
- Avoid array indexes as keys when items can be inserted, deleted, or reordered.
- Keys help React track list elements.
- The `key` prop is used internally by React and is not available as a normal prop inside the child component.

## 5. Deleting from Arrays

To delete an item from an array in React state, we commonly use the JavaScript `filter()` method.

### Understanding `filter()`

`filter()` creates a new array containing only the elements that satisfy a condition.

Example:

```
const numbers = [10, 20, 30, 40];

const result = numbers.filter((number) => number !== 20);

console.log(result);
```

Output:

```
[10, 30, 40]
```

The original array remains unchanged.

### Deleting a Todo item

```
function deleteTodo(id) {
  setTodos((previousTodos) =>
    previousTodos.filter((todo) => todo.id !== id)
  );
}
```

Use it in the interface:

```
{todos.map((todo) => (
  <div key={todo.id}>
    <p>{todo.task}</p>

    <button onClick={() => deleteTodo(todo.id)}>
      Delete
    </button>
  </div>
))}
```

### Understanding the logic

Suppose we have:

```
[
  { id: 1, task: "Study React" },
  { id: 2, task: "Practise C++" },
  { id: 3, task: "Read a book" }
]
```

If we call:

```
deleteTodo(2);
```

The condition is:

```
todo.id !== 2
```

The second item fails the condition, so it is excluded from the new array.

Result: The task with ID `2` disappears from the UI.

## 6. Update All in Array

Sometimes we need to update every item in an array.

For example, imagine changing the completion status of every Todo item to `true`.

We can use the `map()` method.

### Example

```
const numbers = [1, 2, 3];

const updatedNumbers = numbers.map((number) => number * 2);

console.log(updatedNumbers);
```

Output:

```
[2, 4, 6]
```

`map()` creates a new array by transforming every element.

### Updating all Todo items

```
function markAllDone() {
  setTodos((previousTodos) =>
    previousTodos.map((todo) => ({
      ...todo,
      completed: true
    }))
  );
}
```

### Understanding the logic

For every Todo:

1. Copy the existing object using `...todo`.
2. Change `completed` to `true`.
3. Return the new object.
4. `map()` collects the updated objects into a new array.
5. `setTodos()` requests the state update.

The original array and its objects are not mutated.

## 7. Update One in Array

Sometimes we only want to update one particular item instead of every item.

For example, marking a single Todo as completed.

### Example: Update one Todo

```
function markDone(id) {
  setTodos((previousTodos) =>
    previousTodos.map((todo) =>
      todo.id === id
        ? { ...todo, completed: true }
        : todo
    )
  );
}
```

### Understanding the ternary expression

```
condition ? valueIfTrue : valueIfFalse
```

In our example:

```
todo.id === id
  ? { ...todo, completed: true }
  : todo
```

- If the IDs match, return a new updated object.
- Otherwise, return the original Todo object.

### Example

Original array:

```
[
  { id: 1, task: "Study React", completed: false },
  { id: 2, task: "Practise C++", completed: false },
  { id: 3, task: "Read a book", completed: false }
]
```

Call:

```
markDone(2);
```

Updated array:

```
[
  { id: 1, task: "Study React", completed: false },
  { id: 2, task: "Practise C++", completed: true },
  { id: 3, task: "Read a book", completed: false }
]
```

Only the matching task is updated.

## 8. Add a "Mark as Done" Feature to Todo

This final topic brings together object state, array state, `map()`, unique keys, and conditional rendering.

### Objective

Allow users to mark individual tasks as completed.

### Task structure

```
{
  id: 1,
  task: "Study React",
  completed: false
}
```

### Update function

```
function toggleTodo(id) {
  setTodos((previousTodos) =>
    previousTodos.map((todo) =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    )
  );
}
```

This toggles the completion status.

- `false` becomes `true`.
- `true` becomes `false`.

### Conditional rendering

```
{todos.map((todo) => (
  <div key={todo.id}>
    <p>
      {todo.completed ? "Completed" : "Pending"}
    </p>

    <p
      style={{
        textDecoration: todo.completed
          ? "line-through"
          : "none"
      }}
    >
      {todo.task}
    </p>

    <button onClick={() => toggleTodo(todo.id)}>
      {todo.completed ? "Undo" : "Mark as Done"}
    </button>
  </div>
))}
```

### What happens?

When the user clicks `Mark as Done`:

1. The event handler receives the Todo ID.
2. `map()` checks every Todo.
3. The matching Todo gets a new object with the opposite completion value.
4. React receives the new array through the setter.
5. React renders the updated interface.

Interactive Todo behaviour preview

Study React

Pending

Mark done

Practise C++

Completed

Undo

Read a book

Pending

Mark done

1 of 3 tasks completed

Reset preview

# 9. Important JavaScript Methods Revision

These are the most important methods from this module.

| Method       | What it does                                | Example                       |
| ------------ | ------------------------------------------- | ----------------------------- |
| `map()`      | Transforms every element                    | Update all or one item        |
| `filter()`   | Keeps elements satisfying a condition       | Delete an item                |
| `find()`     | Returns the first matching element          | Find a Todo by ID             |
| `push()`     | Adds an element to the original array       | Avoid directly using on state |
| `splice()`   | Adds/removes elements in the original array | Avoid directly using on state |
| Spread `...` | Copies enumerable properties/elements       | Create new objects and arrays |

### Remember the two most important patterns

Updating an array

```
setItems((previousItems) =>
  previousItems.map((item) =>
    item.id === id
      ? { ...item, property: newValue }
      : item
  )
);
```

Deleting from an array

```
setItems((previousItems) =>
  previousItems.filter((item) => item.id !== id)
);
```

# 10. Common Mistakes and Traps

| Mistake                                                | Correct approach                 |
| ------------------------------------------------------ | -------------------------------- |
| Mutating an object directly                            | Create a new object using spread |
| Using `push()` on state                                | Create a new array using spread  |
| Using `splice()` on state                              | Use `filter()` to remove items   |
| Forgetting `key` in lists                              | Use stable unique IDs            |
| Using indexes for changing lists                       | Prefer unique IDs                |
| Updating all items when only one is needed             | Use a condition inside `map()`   |
| Forgetting to return an object from a `map()` callback | Return the updated object        |
| Updating state based on an old snapshot                | Use a functional updater         |

# 11. Code Reading: Think Like an Engineer

Let's practise reading this expression:

```
setTodos((previousTodos) =>
  previousTodos.map((todo) =>
    todo.id === id
      ? { ...todo, completed: !todo.completed }
      : todo
  )
);
```

Beginner reading:

- Call `setTodos`.
- Use `map`.
- Check the ID.
- Change the completed property.

Experienced developer reading:

- I am updating an array stored in React state.
- I use a functional updater because the new array depends on the previous array.
- I transform each Todo using `map()`.
- I compare the current Todo's ID with the target ID.
- If it matches, I create a new object and invert its completion status.
- Otherwise, I preserve the existing object.
- The resulting array becomes the next state.

That's the reading fluency we want to develop. Read the expression aloud until the entire transformation feels natural.

# 12. Quick Revision Questions

1. Why should we avoid directly mutating objects in React state?
2. What is the difference between `map()` and `filter()`?
3. Why does React need unique keys when rendering arrays?
4. How can you update one object inside an array?
5. How can you update every object inside an array?
6. Why is the spread operator useful when updating state?
7. What happens if you use `push()` directly on a state array?
8. How does conditional rendering help implement a Mark as Done feature?
9. Why should we use a functional state updater when the next state depends on the previous state?
10. Why are stable IDs better than array indexes for list keys?

## Module takeaway

# Remember these four patterns

Add

```
[...items, newItem]
```

Delete

```
items.filter(...)
```

Update

```
items.map(...)
```

Copy object

```
{...object, key: value}
```

These four patterns will appear repeatedly in React applications.

The big lesson: React state should be treated immutably. Instead of changing an existing object or array, create a new one and pass it to the state setter. That's the foundation of reliable React data management. 🚀