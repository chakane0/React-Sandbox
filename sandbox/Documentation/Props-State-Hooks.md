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

### Performing initialization and cleanup actions
Our components may need to do other things when the component is created. A common scenario is fetching data from an API or cancelling pending API requests when the component is removed. This is where the <b>useEffect()</b> hook comes in. 

###### What does cleaning up mean?
A cleanup is tasks needed to be performed to prevent unwanted behavior and memory leaks when a component is mounted/unmounted. This is essentially the process of 'undoing' anything your effect has setup for that component. the 2 main scenarios of when we want to clean up something is when:
<ol>
    <li>When the effects sets something up that needs to be torn down later such as: event listeners, timers, manipulating DOM changes</li>
    <li>When the effects depends on values that change: If the dependency array changes, react will re-run the effect and clean up the previous one.</li>
</ol>

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

In effect, useEffect() is used to setup a function that calls fetchUser() and sets the state of our component when the promise resolves. 

But what is the user happens to do something while the fetchUser request is pending..such as going to another page. 

###### Cancelling requests and resetting state
This is a common occurrence where a user will go on to a page which could trigger an API can and then immediately trigger another API request, which means cancelling the previous API calls as to not overload the system. 

useEffect() has a use here to clean up these previous pending API requests. 

<details>
<summary>Using useEffect() to cancel an API request</summary>

```.jsx
import React, { useEffect, useState } from 'react';
import { Promise } from 'bluebird';

Promise.config({ cancellation: true });

function fetchUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id: 1, name: 'Chef' });
        }, 1000);
    });
}

export default function User() {
    const [id, setId] = useState('...loading');
    const [name, setName] = useState('...loading');

    useEffect(() => {
        const promise = fetchUser().then(user => {
            setId(user.id);
            setName(user.name);
        });

        return () => {
            promise.cancel();
        };
    });

    return ( 
        <>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
        </>
    );
}
```

</details>


In the code above lets look at this part:
```.jsx
useEffect(() => {
    const promise = fetchUser().then(user => {
        setId(user.id);
        setName(user.name);
    })

    return () => {
        promise.cancel();
    };
});
```

This effect creates a promise by calling the fetchUser() API. It also returns a function when that component is being removed by calling ```promise.cancel()```. This prevents the component from trying to update state after its been removed. 

Now lets look at the App component which utilizes the above code. 

<details>
<summary>App component</summary>

```.jsx
import React, { useState } from 'react';
import User from './User';

const showHideUser = ({ show }) => (show ? <User /> : null);

export default function App() {
    const [show, setShow] = useState(false);

    return (
        <>
            <button onClick={() => setShow(!show)}>
                {show ? 'Hide User' : 'Show User'}
            </button>
            <ShowHideUser show={show}>
        </>
    )
}
```
</details>

In the app component we have a state value which determines wether or not the User component is rendered. If show is true, <User/> us rendered. If its false the User is removed therefore triggering the useEffect() hook.

How the pieces of code work is that when you click on Show User button it will fetch the data, which takes 1 second. If you click Hide User before the promise resolves, then the useEffect() hook will cancel that request. If you did not have this use effect code and try this, then an error will occur. 

Effects are usually run by React after every render. However this may not be what we really want. We could also call the API after the first render. 

###### Optimizing side-effect actions
By default, React assumes that every effect which is ran should be cleaned up. This is usually not the case. You could have a specific property or state that requires cleanup when they change. You can pass an array of values to watch as the second argument to useEffect(). So, if you have a resolved state that requires cleanup when it changes, we could have something like this:

```.jsx
const [resolved, setResolved] = useState(false);
useEffect(() => {
    // ... effect code

    return () => {
        // cleanup of code that depends on 'resolved'
    }
}, resolved);
```

Here, the cleanup function only runs when the resolved state is changed. We can have another case where the cleanup code does not run if that resolved state is changed. right now our code is structured to  cleanup code after every render. What we really want to do is <b>fetch it once the component is first mounted.</b> 

<details>
<summary>Optimized cancel API request code</summary>

```.jsx
import React, { useEffect, useState } from 'react';
import { Promise } from 'bluebird';

Promise.config({ cancellation: true });

function fetchUser() {
    console.count('fetching user...');
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({id: 1, name: 'Eric'});
        }, 1000);
    });
}

export default function User() {
    const [id, setId] = useState('...loading');
    const [name, setName] = useState('...loading');
    useEffect(() => {
        const promise = fetchUser().then(user => {
            setId(user.id);
            setName(user.name);
        });

        return () => {
            promise.cancel();
        };
    }, []);

    return (
        <>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
        </>
    )
}
```

</details>


Notice in this optimized code, inside useEffect() we passed an empty array. This tells React theres no values to watch and that we only want to run the cleanup code when the component is removed. In effect, we only run this code once, after the component is mounted. Without this empty array we can notice that this call is made several times. 

### Sharing data using context hooks
Effects are the bridge between your react components and the outside world. The most common use case for effects is to <b>fetch data that the components needs when its first created, and then clean up after the component when its removed. </b>

Another way of sharing data, is through the use of 'context'. Many react applications will have components that share data. For example think of a logged in user. If one exists, then that can alter how other components are rendered (anon vs known). this cases like this the use of context will make this logged in user data available to other components. 

<details>
<summary>Example of sharing fetched data</summary>

```.jsx

```

</details>