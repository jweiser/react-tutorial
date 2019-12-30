import React, { useState, useEffect } from 'react';
import randomcolor from 'randomcolor';

function App() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('');

    function increment() {
        setCount(prevCount => prevCount + 1);
    }

    function decrement() {
        setCount(prevCount => prevCount - 1);
    }

    // Array as the second parameter is the list of state variables to watch for changes for re-running the effect
    // (an empty array is the same as running the effect only once as it would if using the componentDidMount method)
    useEffect(() => {
        setColor(randomcolor());
    }, [count]);

    return (
        <div>
            <h1 style={{color: color}}>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default App;