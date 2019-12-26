import React from 'react';

import Header from './Header';
import Greeting from './Greeting';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header username="Joel" />
                <Greeting />
            </div>
        )
    }
}

export default App;