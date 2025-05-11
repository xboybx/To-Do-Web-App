import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const API_URL = process.env.REACT_APP_API_URL;

function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 bg-[#18181B] bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-zinc-800 rounded-lg p-6 relative w-full max-w-md">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
          aria-label="Close modal"
        >
          &#x2715;
        </button>
        {children}
      </div>
    </div>
  );
}

function App() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ task: '', date: '', priority: 'medium' });
  const [editingId, setEditingId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  async function fetchTasks() {
    try {
      const res = await axios.get(`${API_URL}/api/tasks`);
      setTasks(res.data);
    } catch (error) {
      console.error('Failed to fetch tasks', error);
    }
  }

  function resetForm() {
    setForm({ task: '', date: '', priority: 'medium' });
    setEditingId(null);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.task.trim()) {
      alert('Task is required');
      return;
    }
    try {
      if (editingId) {
        await axios.put(`${API_URL}/api/tasks/${editingId}`, form);
      } else {
        await axios.post(`${API_URL}/api/tasks`, form);
      }
      resetForm();
      fetchTasks();
      setIsModalOpen(false);
    } catch (error) {
      console.error('Failed to save task', error);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm('Are you sure you want to delete this task?')) return;
    try {
      await axios.delete(`${API_URL}/api/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error('Failed to delete task', error);
    }
  }

  function startEdit(task) {
    setForm({
      task: task.task,
      date: task.date ? task.date.substring(0, 10) : '',
      priority: task.priority || 'medium',
    });
    setEditingId(task._id);
    setIsModalOpen(true);
  }

  async function toggleComplete(task) {
    try {
      await axios.put(`${API_URL}/api/tasks/${task._id}`, { ...task, completed: !task.completed });
      fetchTasks();
    } catch (error) {
      console.error('Failed to update task', error);
    }
  }

  async function toggleStar(id, starred) {
    try {
      const taskToUpdate = tasks.find(t => t._id === id);
      if (!taskToUpdate) return;
      await axios.put(`${API_URL}/api/tasks/${id}`, { ...taskToUpdate, starred });
      fetchTasks();
    } catch (error) {
      console.error('Failed to update task star', error);
    }
  }

  function filteredTasks() {
    return tasks;
  }

  return (
    <div className="min-h-screen bg-background p-6 max-w-full">
      <nav className="mb-6  pb-4 flex items-center justify-between bg-[#18181b] px-6 py-4 rounded-md shadow-md">
        <h1 className="text-4xl font-extrabold text-white  tracking-wide">To-Do App</h1>
        <button
          className="px-4 py-2  hover:text-gray-300 bg-gray-900/30 hover:bg-gray-900/50 rounded-md  duration-200"
          onClick={() => {
            resetForm();
            setIsModalOpen(true);
          }}
        >
          Add Task
        </button>
      </nav>


      <TaskList
        tasks={filteredTasks()}
        onToggleComplete={toggleComplete}
        onEdit={startEdit}
        onDelete={handleDelete}
        onToggleStar={toggleStar}
      />


      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <TaskForm
            form={form}
            setForm={setForm}
            onSubmit={handleSubmit}
            onCancel={() => setIsModalOpen(false)}
            editing={!!editingId}
          />
        </Modal>
      )}
    </div>
  );
}

export default App;
