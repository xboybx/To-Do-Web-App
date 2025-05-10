import React from 'react';
import { RiAddLine, RiCloseLine } from 'react-icons/ri';

export default function TaskForm({ form, setForm, onSubmit, onCancel, editing }) {
    return (
        <form onSubmit={onSubmit} className="mb-6 bg-card p-6 rounded-lg shadow-md max-w-md mx-auto space-y-6">
            <div>
                <label className="block mb-2 text-sm font-semibold text-foreground" htmlFor="task">Task *</label>
                <input
                    id="task"
                    type="text"
                    placeholder="Enter your task"
                    className="w-full p-3 rounded-lg border border-muted text-foreground bg-background placeholder-secondary focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200"
                    value={form.task}
                    onChange={e => setForm({ ...form, task: e.target.value })}
                    required
                />
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                <div className="flex-1">
                    <label className="block mb-2 text-sm font-semibold text-foreground" htmlFor="date">Due Date</label>
                    <input
                        id="date"
                        type="date"
                        className="w-full p-3 rounded-lg border border-muted text-foreground bg-background placeholder-secondary focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200"
                        value={form.date}
                        onChange={e => setForm({ ...form, date: e.target.value })}
                    />
                </div>
                <div className="flex-1">
                    <label className="block mb-2 text-sm font-semibold text-foreground" htmlFor="priority">Priority</label>
                    <select
                        id="priority"
                        className="w-full p-3 rounded-lg border border-muted text-foreground bg-background placeholder-secondary focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200"
                        value={form.priority}
                        onChange={e => setForm({ ...form, priority: e.target.value })}
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
            </div>
            <div className="flex justify-end space-x-4">
                {editing && (
                    <button
                        type="button"
                        onClick={onCancel}
                        className="px-4 py-2 bg-destructive text-card rounded-lg shadow hover:brightness-90 flex items-center space-x-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-destructive"
                    >
                        <RiCloseLine />
                        <span>Cancel</span>
                    </button>
                )}
                <button
                    type="submit"
                    className="px-4 py-2 bg-gray-300  text-card rounded-lg shadow hover:brightness-110 flex items-center space-x-2 transition-colors   hover:text-gray-300 bg-gray-900/30 hover:bg-gray-900/50  duration-200"
                >
                    <RiAddLine />
                    <span>{editing ? 'Update' : 'Add'} Task</span>
                </button>
            </div>
        </form>
    );
}
