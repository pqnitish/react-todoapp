import React, { useState } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const [formState, setFormState] = useState({
    task: "", // string
    completed: false, // boolean
    taskAssignedTo: "", // string
  });

  function handleChange(event) {
    // Implement logic to handle form changes
    let value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    let newFormState = {
      ...formState,
      [event.target.name]: value,
    };
    setFormState(newFormState);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Implement logic to handle form submission
    const newTasks = {
      ...formState,
      id: Date.now() + Math.random(),
    };
    const updatedArray = [...tasks, newTasks];
    setTasks(updatedArray);
    setFormState({
      task: "",
      completed: false,
      taskAssignedTo: "",
    });
  }
  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
   // console.log(updatedTasks);
    setTasks(updatedTasks);
  };
  const handleToggle = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            name="task"
            type="text"
            placeholder="Add Task"
            onChange={handleChange}
            value={formState.task}
          />
          <label>
            Completed:
            <input
              name="completed"
              type="checkbox"
              onChange={handleChange}
              value={formState.completed}
            />
          </label>
          <select
            name="taskAssignedTo"
            onChange={handleChange}
            value={formState.taskAssignedTo}
          >
            <option value="">Select Assignee</option>
            <option value="Bruce">Bruce</option>
            <option value="Barry">Barry</option>
            <option value="Clark">Clark</option>
            <option value="Oliver">Oliver</option>
            <option value="Jina">Jina</option>
          </select>
          <button type="submit">Add Task</button>
        </form>
      </div>
      <hr />
      {tasks.map((item) => (
        <TaskItem
          key={item.id}
          item={item}
          onDelete={handleDelete}
          onToggle={handleToggle}
        />
      ))}
    </>
  );
}

export default App;
