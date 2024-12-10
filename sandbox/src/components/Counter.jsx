import React, { useState } from 'react';

export default function Counter() {

    // setup state
    const [count, setCount] = useState(0);

    // the e => makes sure one function call is going to be executed
    return (
        <>
            <section>
                <button onClick={e => setCount(count+1)}>+</button>
                <button onClick={e => setCount(count-1)}>-</button>
                <p>The current count is: {count}</p>
            </section>
        </>
    )
}