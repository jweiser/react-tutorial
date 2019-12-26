import React from 'react';
import './App.css';

import todosData from '../todosData';
import ToDoItem from './ToDoItem';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: todosData
        };
    }

    render() {
        const toDoItemComponents = this.state.todos.map(itemData => <ToDoItem key={itemData.id} data={itemData} />);

        return (
            <div className="todo-list">
                {toDoItemComponents}
            </div>
        );
    }
};

export default App;