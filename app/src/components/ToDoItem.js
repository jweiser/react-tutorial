import React from 'react';

import './ToDoItem.css';

const ToDoItem = function() {
    return (
        <div className="todo-item">
            <input type="checkbox" />
            <p>Placeholder text here</p>
        </div>
    );
};

export default ToDoItem;