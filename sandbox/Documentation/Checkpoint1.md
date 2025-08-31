# Checkpoint1

Here we will create a React application which serves as an exercise for the previous chapters. This will only consider a single page that features all topics covered. Typescript willbe used to create these components

## Chapter 1 - Props, State
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





