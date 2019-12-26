import React from 'react';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            isLoggedIn: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            };
        });
    }

    render() {
        const buttonActionText = this.state.isLoggedIn ? 'Log out' : 'Log in';
        const displayText = this.state.isLoggedIn ? 'Logged In' : 'Logged out';

        return (
            <div>
                <button onClick={this.handleClick}>{buttonActionText}</button>
                <h1>{displayText}</h1>
            </div>
        );
    }
}

export default App;