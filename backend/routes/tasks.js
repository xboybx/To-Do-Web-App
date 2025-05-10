const express = require('express');
const router = express.Router();
const Task = require('../models/task');

// Get all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 });
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: 'Failed to get tasks' });
    }
});

// Create a new task
router.post('/', async (req, res) => {
    try {
        const { task, date, priority } = req.body;
        if (!task || task.trim() === '') {
            return res.status(400).json({ message: 'Task is required' });
        }
        const newTask = new Task({
            task: task.trim(),
            date: date ? new Date(date) : null,
            priority: priority || 'medium',
            completed: false,
        });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(500).json({ message: 'Failed to create task' });
    }
});

// Update a task
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        if (updateData.task && updateData.task.trim() === '') {
            return res.status(400).json({ message: 'Task cannot be empty' });
        }
        if (updateData.date) {
            updateData.date = new Date(updateData.date);
        }
        const task = await Task.findByIdAndUpdate(id, updateData, { new: true });
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json(task);
    } catch (err) {
        res.status(500).json({ message: 'Failed to update task' });
    }
});

// Delete a task
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndDelete(id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json({ message: 'Task deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to delete task' });
    }
});

module.exports = router;
