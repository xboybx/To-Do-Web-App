const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    task: { type: String, required: true, trim: true },
    date: { type: Date, default: null },
    priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
    completed: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
