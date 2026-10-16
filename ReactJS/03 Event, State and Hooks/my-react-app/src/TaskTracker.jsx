
import { useState } from "react";

export default function TaskTracker() {
  const [tasksList, setTasksList] = useState([
    { id: 1, text: "Learn React States", completed: false },
    { id: 2, text: "Practise event handlers", completed: true },
  ]);

  const [inputValue, setInputValue] = useState("");

  function addTask(event) {
    event.preventDefault();

    const text = inputValue.trim();

    if (text === "") return;

    const newTask = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTasksList((previousTasks) => [
      ...previousTasks,
      newTask,
    ]);

    setInputValue("");
  }

  function toggleTask(id) {
    setTasksList((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  return (
    <div className="task-tracker">
      <h2>My Task Tracker</h2>

      <form onSubmit={addTask}>
        <input
          type="text"
          value={inputValue}
          onChange={(event) =>
            setInputValue(event.target.value)
          }
          placeholder="Enter a task"
        />

        <button type="submit">+ Add</button>
      </form>

      <ul>
        {tasksList.map((task) => (
          <li key={task.id}>
            <strong
              className={
                task.completed ? "completed-task" : ""
              }
            >
              {task.text}
            </strong>{" "}

            <span
              className={
                task.completed
                  ? "badge text-bg-success"
                  : "badge text-bg-secondary"
              }
            >
              {task.completed ? "Done" : "Pending"}
            </span>{" "}

            <button
              type="button" className="btn btn-outline-secondary"
              onClick={() => toggleTask(task.id)}
            >
              {task.completed ? "Mark Pending" : "Mark Done"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
