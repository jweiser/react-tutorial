import React from 'react';

import './ToDoItem.css';

const ToDoItem = function(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.data.completed}/>
            <p>{props.data.text}</p>
        </div>
    );
};

export default ToDoItem;