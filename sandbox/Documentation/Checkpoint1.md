# Checkpoint1

Here we will create a React application which serves as an exercise for the previous chapters. This will only consider a single page that features all topics covered. Typescript willbe used to create these components

## Chapter 1 - Props, State

A fundamental concept about props is <b>destructuring</b>. You can pass an object as "props" into a component and then inside the component, consume and render it. 

Heres an example of a Component (Hello), which will have mock JSON data and get passed into another component which renders the data. 

<details>
    <summary>Code Example</summary>
Hello.tsx

```tsx
import HelloHelper from "./HelloHelper"


// needed for typescript to give types to the data were consuming
type Person = {
    name: string,
    message: string,
    emoji: string
}

// raw data
const person: Person[] = [
    {
        name: "Jake", 
        message: "Hello, to you!",
        emoji:"👌",
    },
    {
        name: "Rob", 
        message: "Hello, to you too!",
        emoji:"🖐️",
    },

]

// This function maps through the mock data and passes it into the Helper Component which renders the data. 
export default function Hello() {
    return (
        <div>
            <h1>
                {person.map((p, index) => (
                    <HelloHelper key={index} person={p} />   
                ))}
            </h1>
        </div>
    )
}
```

HelloHelper.tsx

```tsx
type Person = {
    name: String,
    message: String,
    emoji: String
}

type HelloHelperProps = {
    person: Person;
}

export default function HelloHelper({person} : HelloHelperProps) {
    return (
        <>
        {person.message} {person.name} {person.emoji}
        </>
    )
}
```

</details>





## Chapter 2 - Hooks --> useEffect
React will render content but often times you want to do things outside of that such as console logs, fetch data, etc. To help with that is ```useEffect```, it basically says, "After rendering the component, run this code." - its an OOTB lifecycle function, it is a "side effect".

In this section we will have a button which will return some mock data to us. Here, we use the useEffect function, which returns a Promise<type>. For example we can define one like this.:

<details>
<summary>code snippet</summary>

```jsx

    // is ran after page rendering
    useEffect(() => {
        fetchMovieTitle().then(movie => {
            setTitle(movie.title);
            setYear(movie.year);
        })
    });


   // mock api call
    function fetchMovieTitle(): Promise<movie> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(
                    {
                        title: "Dune 2", 
                        year: 2025,
                    }
                )
            }, 3500);
        });
    };
```

</details>

There can also be a case where we can use ```useEffect``` to cancel an API request. 

## Chapter 3 - Hooks --> context hooks

In your apps, there will be components which will share data. For example think of a logged in user, most components will be aware of their associated data. Context Hooks will make such data available to other components.





