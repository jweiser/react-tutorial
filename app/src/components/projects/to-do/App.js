import React from 'react';
import './App.css';

import todosData from './todosData';
import ToDoItem from './ToDoItem';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: todosData
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedToDos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });

            return {
                todos: updatedToDos
            };
        });
    }

    render() {
        const toDoItemComponents = this.state.todos.map(itemData => <ToDoItem key={itemData.id} data={itemData} handleChange={this.handleChange} />);

        return (
            <div className="todo-list">
                {toDoItemComponents}
            </div>
        );
    }
};

export default App;