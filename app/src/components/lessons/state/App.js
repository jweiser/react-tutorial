import React from 'react';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            name: "John",
            age: "30"
        };
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age}</h3>
            </div>
        );
    }
}

export default App;