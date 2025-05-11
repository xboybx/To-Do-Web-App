import React from 'react';
import TaskItem from './TaskItem';

export default function TaskList({ tasks, onToggleComplete, onEdit, onDelete, onToggleStar }) {
    if (tasks.length === 0) {
        return <p className="text-center text-secondary mt-6">No tasks found.</p>;
    }

    return (
        <ul className="rounded-md shadow-card bg-surface p-4">
            {tasks.map(task => (
                <TaskItem
                    key={task._id}
                    task={task}
                    onToggleComplete={onToggleComplete}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    onToggleStar={onToggleStar}
                />
            ))}
        </ul>
    );
}
