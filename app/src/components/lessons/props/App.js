import React from 'react';

import Joke from './Joke';

function App() {
    return (
        <div>
            <Joke question="Example Joke 1" punchLine="Punchline 1" />
            <Joke question="Example Joke 2" punchLine="Punchline 2" />
            <Joke question="Example Joke 3" punchLine="Punchline 3" />
            <Joke question="Example Joke 4" punchLine="Punchline 4" />
            <Joke punchLine="Punchline 5" />
        </div>
    );
}

export default App;