// TaskItem.js
import React from 'react';

const TaskItem = ({ item, onDelete, onToggle }) => {
  const handleDelete = () => {
    onDelete(item.id);
  };

  const handleToggle = () => {
    onToggle(item.id);
  };

  return (
    <div>
      <span style={{ color: item.completed ? 'green' : 'red' }}>
        {item.task} {item.completed}
      </span>
      <button onClick={handleToggle}>Toggle Task</button>
      <button onClick={handleDelete}>Delete Task</button>
    </div>
  );
};

export default TaskItem;
