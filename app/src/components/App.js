import React from 'react';
import './App.css';

import todosData from '../todosData';
import ToDoItem from './ToDoItem';

const App = function() {
    const toDoItemComponents = todosData.map(itemData => <ToDoItem key={itemData.id} data={itemData} />);

    return (
        <div className="todo-list">
            {toDoItemComponents}
        </div>
    );
};

export default App;