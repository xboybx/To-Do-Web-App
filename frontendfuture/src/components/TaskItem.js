// import React, { useState, useEffect } from 'react';
// import { RiCheckLine, RiEditLine, RiDeleteBinLine, RiStarLine, RiStarFill } from 'react-icons/ri';

// export default function TaskItem({ task, onToggleComplete, onEdit, onDelete, onToggleStar }) {
//     const [starred, setStarred] = React.useState(task.starred || false);

//     React.useEffect(() => {
//         setStarred(task.starred || false);
//     }, [task.starred]);

//     const handleStarClick = () => {
//         const newStarred = !starred;
//         setStarred(newStarred);
//         if (onToggleStar) {
//             onToggleStar(task._id, newStarred);
//         }
//     };

//     return (
//         <li
//             className={`mb-3 p-4 rounded-lg shadow-md flex flex-col bg-card min-h-[80px] ${task.completed ? 'opacity-60 line-through' : ''}`}
//         >
//             <div className="flex justify-between items-center mb-3">
//                 <h3 className={`text-lg font-semibold break-words whitespace-normal ${starred ? 'text-accent' : 'text-foreground'}`}>
//                     {task.task}
//                 </h3>
//                 <div className="flex space-x-3 items-center">
//                     <button
//                         onClick={handleStarClick}
//                         className={`transition ${starred ? 'text-accent' : 'text-muted hover:text-accent'}`}
//                         title={starred ? 'Unstar Task' : 'Star Task'}
//                     >
//                         {starred ? <RiStarFill size={20} /> : <RiStarLine size={20} />}
//                     </button>
//                     <button
//                         onClick={() => onToggleComplete(task)}
//                         className="text-primary hover:text-primary/80 transition"
//                         title={task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
//                     >
//                         <RiCheckLine size={20} />
//                     </button>
//                     <button
//                         onClick={() => onEdit(task)}
//                         className="text-accent hover:text-accent/80 transition"
//                         title="Edit Task"
//                     >
//                         <RiEditLine size={20} />
//                     </button>
//                     <button
//                         onClick={() => onDelete(task._id)}
//                         className="text-destructive hover:text-destructive/80 transition"
//                         title="Delete Task"
//                     >
//                         <RiDeleteBinLine size={20} />
//                     </button>
//                 </div>
//             </div>
//             <div className="flex justify-between text-sm text-muted">
//                 <span>Priority: {task.priority}</span>
//                 <span>Due: {task.date ? new Date(task.date).toLocaleDateString() : 'No date'}</span>
//             </div>
//         </li>
//     );
// }


// /// FILEPATH: c:/Users/jeswa/Desktop/Dev Workspace/ToDo Web APP/frontend/src/components/TaskItem.js

// import React from 'react';
// import { RiCheckLine, RiEditLine, RiDeleteBinLine } from 'react-icons/ri';

// export default function TaskItem({ task, onToggleComplete, onEdit, onDelete }) {
//     return (
//         <li
//             className={`mb-3 p-4 rounded-md shadow-card flex flex-col bg-surface min-h-[80px] ${task.completed ? 'opacity-60 line-through' : ''}`}
//         >
//             <div className="flex flex-wrap justify-between items-start mb-3">
//                 <h3 className="text-lg font-semibold text-textPrimary break-words flex-grow mr-2">{task.task}</h3>
//                 <div className="flex space-x-2 mt-2 sm:mt-0">
//                     <button
//                         onClick={() => onToggleComplete(task)}
//                         className="text-success hover:text-green-600 transition p-1"
//                         title={task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
//                     >
//                         <RiCheckLine size={18} />
//                     </button>
//                     <button
//                         onClick={() => onEdit(task)}
//                         className="text-accent hover:text-blue-600 transition p-1"
//                         title="Edit Task"
//                     >
//                         <RiEditLine size={18} />
//                     </button>
//                     <button
//                         onClick={() => onDelete(task._id)}
//                         className="text-error hover:text-red-600 transition p-1"
//                         title="Delete Task"
//                     >
//                         <RiDeleteBinLine size={18} />
//                     </button>
//                 </div>
//             </div>
//             <div className="flex justify-between text-sm text-secondary">
//                 <span>Priority: {task.priority}</span>
//                 <span>Due: {task.date ? new Date(task.date).toLocaleDateString() : 'No date'}</span>
//             </div>
//         </li>
//     );
// }

// FILEPATH: c:/Users/jeswa/Desktop/Dev Workspace/ToDo Web APP/frontend/src/components/TaskItem.js

import React from 'react';
import { RiCheckLine, RiEditLine, RiDeleteBinLine, RiStarLine, RiStarFill } from 'react-icons/ri';

export default function TaskItem({ task, onToggleComplete, onEdit, onDelete, onToggleStar }) {
    const [starred, setStarred] = React.useState(task.starred || false);

    React.useEffect(() => {
        setStarred(task.starred || false);
    }, [task.starred]);

    const handleStarClick = () => {
        const newStarred = !starred;
        setStarred(newStarred);
        if (onToggleStar) {
            onToggleStar(task._id, newStarred);
        }
    };

    return (
        <li className={` bg-[#202022] mb-3 p-4 rounded-lg shadow-md flex flex-col bg-card min-h-[80px] ${task.completed ? 'opacity-60' : ''}`}>
            <div className="flex flex-col sm:flex-row justify-between items-start mb-3">
                <h3 className={`text-lg font-semibold break-words w-full sm:w-3/4 mb-2 sm:mb-0 ${starred ? 'text-accent' : 'text-foreground'}`}>
                    {task.task}
                </h3>
                <div className="flex space-x-2 w-full sm:w-auto justify-start sm:justify-end">
                    <button
                        onClick={handleStarClick}
                        className="text-accent hover:text-accent/80 transition p-1 text-yellow-400 hover:text-yellow-300 bg-yellow-900/30 hover:bg-yellow-900/50 rounded-md  duration-200 "
                        // className={`transition p-1 ${staryellow ? 'text-accent' : 'text-muted hover:text-accent'}`}
                        title={starred ? 'Unstar Task' : 'Star Task'}
                    >
                        {starred ? <RiStarFill size={18} /> : <RiStarLine size={18} />}
                    </button>
                    <button
                        onClick={() => onToggleComplete(task)}
                        className="text-accent hover:text-accent/80 transition p-1 text-blue-400 hover:text-blue-300 bg-blue-900/30 hover:bg-blue-900/50 rounded-md  duration-200"
                        title={task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
                    >
                        <RiCheckLine size={18} />
                    </button>
                    <button
                        onClick={() => onEdit(task)}
                        className="text-accent hover:text-accent/80 transition p-1 text-green-400 hover:text-green-300 bg-green-900/30 hover:bg-green-900/50 rounded-md  duration-200"
                        title="Edit Task"
                    >
                        <RiEditLine size={18} />
                    </button>
                    <button
                        onClick={() => onDelete(task._id)}
                        className="text-accent hover:text-accent/80 transition p-1 text-red-400 hover:text-red-300 bg-red-900/30 hover:bg-red-900/50 rounded-md  duration-200"
                        title="Delete Task"
                    >
                        <RiDeleteBinLine size={18} />
                    </button>
                </div>
            </div>
            <div className="flex justify-between text-sm text-muted">
                <span className={`font-semibold px-2 py-1 rounded-md cursor-default select-none ${task.priority === 'high' ? 'text-red-400 bg-red-900/30 hover:bg-red-900/50' :
                    task.priority === 'medium' ? 'text-yellow-400 bg-yellow-900/30 hover:bg-yellow-900/50' :
                        task.priority === 'low' ? 'text-green-400 bg-green-900/30 hover:bg-green-900/50' :
                            'text-gray-400'
                    }`}>
                    Priority: {task.priority}
                </span>
                <span className="italic text-gray-400">
                    Due: {task.date ? new Date(task.date).toLocaleDateString() : 'No date'}
                </span>
            </div>
        </li>
    );
}
