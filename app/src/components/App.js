import React from 'react';
import './App.css';

import ToDoItem from './ToDoItem';

const App = function() {
    return (
        <div className="todo-list">
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
        </div>
    );
};

export default App;