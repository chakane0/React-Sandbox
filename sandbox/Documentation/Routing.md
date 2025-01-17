# Handling Navigation with Routes

Every app is not confined to just one page. It can have multiple pages. ```React Router``` will be used extensively to ensure consistent behavior in routing to these other pages. 

### Declaring Routes

Using React Router you can define the different parts of your application. With every react project we would need to make sure we have this installed: ```npm install react-router-dom```.

Here is an example of a simple route which render a component. 

<details>
<summary>Basic code example of react routing</summary>

```MyRoute.jsx```
```.jsx
import { createBrowserRouter } from "react-router-dom";

function MyComponent() {
    return <p>Hello, Route!</p>;
}


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MyComponent />
    },
]);
```

```App.js```
```.jsx
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from "./Components/MyRoute"
// import { RouterProvider } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
```

</details>

When we setup ```createBrowserRouter``` we can have actual routes declared as 2 key properties: (1) path and (2) element. When the path property matches the active URL, the component will be rendered.

Just note that this function were using is not rendering anything, it just manages how and when components are rendered. Its only responsible for checking the URL and retuning the right components. 


#### Decoupling Route Declarations

Heres how we can manage multiple routes declared in a single module. To help, each top level feature of the application defines its own routes