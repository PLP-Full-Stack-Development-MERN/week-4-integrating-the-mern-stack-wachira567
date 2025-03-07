import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ task, fetchTasks }) => {
  const [formData, setFormData] = useState({
    title: task?.title || '',
    description: task?.description || '',
    status: task?.status || 'pending',
    dueDate: task?.dueDate || ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (task) {
      await axios.put(`http://localhost:5000/api/tasks/${task._id}`, formData);
    } else {
      await axios.post('http://localhost:5000/api/tasks', formData);
    }
    fetchTasks();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <input type="text" placeholder="Title" required 
        className="w-full p-2 border rounded"
        value={formData.title} 
        onChange={(e) => setFormData({ ...formData, title: e.target.value })} 
      />
      <textarea placeholder="Description"
        className="w-full p-2 border rounded"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      />
      <select 
        className="w-full p-2 border rounded"
        value={formData.status} 
        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
      >
        <option value="pending">Pending</option>
        <option value="in progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <input type="date" 
        className="w-full p-2 border rounded"
        value={formData.dueDate} 
        onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
      />
      <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded">
        {task ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;