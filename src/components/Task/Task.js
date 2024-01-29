import React from 'react';
import './Task.css';

function Task({ taskId, title, description, date, onDelete }) {
    return (
        <div className='task-container'>
            <div className='title'>
                <h1>{title}</h1>
            </div>
            <div>
                <p>{description}</p>
            </div>
            <div className='due-date'>
                {date.toString()}
            </div>
            <button onClick={() => onDelete(taskId)} className='delete'>Delete</button>
        </div>
    );
}

export default Task;