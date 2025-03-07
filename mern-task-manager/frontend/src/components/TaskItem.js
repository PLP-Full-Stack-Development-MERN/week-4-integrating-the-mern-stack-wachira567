import React from 'react';
import axios from 'axios';

const TaskItem = ({ task, fetchTasks }) => {
  const deleteTask = async () => {
    await axios.delete(`http://localhost:5000/api/tasks/${task._id}`);
    fetchTasks();
  };

  return (
    <div className="mb-4 p-4 border rounded shadow">
      <h3 className="text-xl font-bold">{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
      <div className="mt-2 space-x-2">
        <TaskForm task={task} fetchTasks={fetchTasks} />
        <button onClick={deleteTask} className="px-3 py-1 bg-red-500 text-white rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;