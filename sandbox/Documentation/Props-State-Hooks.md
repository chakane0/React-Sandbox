# Properties, State, Hooks

## State and Properties
State is the dynamic part of a react component. We're able to declare an initial state which can/will change over time. 

Properties are pieces of data passed into our react components. 

Properties differ from state because they dont change after the initial rendering of the component. 

## Hooks
Hooks are an API which allows our functional components to "hook" into react functionality. What this means is that instead of managing classes, we can simply use functions to create out components will the full functionality of React. 

One important Hook is, <b>useState()</b>. This enables out functions to be stateful. We can set initial values like this


<details>
<summary>Setting up  a stateful component</summary>

```.jsx
import React, { Fragment, useState } from 'react';

export default function App() {
    const [name, setName] = useState('Chakane');
    const [age, setAge] = useState('29');

    return (
        <>
            <section>
                <input value={name} onChange={e => setName(e.target.value)}/>
                <p>My name is: {name}</p>
            </section>
            <section>
                <input value={age} onChange={e => setAge(e.target.value)}>
                <p>and my age is: {age}</p>
            </section>
        </>
    )
}

```

</details>

In this example we setup a function with 2 pieces of state. We can have as many state values as we want. 

We have 
```.jsx
const [name, setName] = useState('Stan');
```
This this case:
<ul>
    <li>name --> state variable to use for rendering</li>
    <li>setName --> function to update the variable. we can pass something with setName(value)</li>
</ul>
<br></br>

##### Performing initialization and cleanup actions
Our components may need to do other things when the component is created. A common scenario is fetching data from an API or cancelling pending API requests when the component is removed. This is where the <b>useEffect()</b> hook comes in. 

###### Fetching component data
The useEffect() hook can run "side effects" in your component. Basically, if the component needs to do anything other than return JSX, such as fetching API data, we can do this using useEffect().

<details>
<summary>Example of fetching mock API data using useEffect()</summary>

```.js
import React, { useEffect, useState } from 'react';

function fetchUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id: 1, name: 'Kyle' });
        }, 1000);
    });
};

export default function App() {
    const [id, setId] = useState('...loading');
    const [name, setName] = useState('...loading');

    useEffect(() => {
        fetchUser().then(user => {
            setId(user.id);
            setName(user.name);
        });
    });
};

return {
    <>
        <p>ID: {id}</p>
        <p>Name: {name}</p>
    </>
}


```

</details>

Here the useEffect() hook expects a function as an argument. The function is called after the component is done rendering. 

The fetchUser() function returns a <b> promise </b> which resolves into an object with 2 properties. There is a setTimeout() function which delays the promise resolution for 1 second, making this an "async" just like an actual fetch would be. 

Take a mental note of how state is being used here. 

```.jsx
const [id, setId] = useState('...loading');
const [name, setName] = useState('...loading');

useEffect(() => {
    fetchUser().then(user => {
        setId(user.id);
        setName(user.name);
    });
});
```

