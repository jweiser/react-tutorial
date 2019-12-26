import React from 'react';

class LogInOut extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: true
        };
    }

    render() {
        const logState = this.state.isLoggedIn ? 'in' : 'out';

        return (
            <div>
                <h1>You are currently logged {logState}</h1>
            </div>
        );
    }
}

export default LogInOut;