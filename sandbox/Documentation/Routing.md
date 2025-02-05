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

Heres how we can manage multiple routes declared in a single module. To help, each top level feature of the application defines its own routes.

What we can do is, at each top-level feature of the application can have its own route. This way, its clear to see which routes belong top what feature. 

Heres one we can place at the App component

<details>
  <summary>Creating route in App.js</summary>

```App.js```
```.jsx
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true, 
        element: <h1>Nesting Routes</h1>
      },
      routeOne,
      routeTwo,
    ],
  },
]);
export const App = () => <RouterProvider router={router} />
```

```Layout.jsx```
```.jsx
function Layout() {
  return (
    <main>
      <nav>
        <Link to='/'>Main</Link>
        <span> | </span>
        <Link to='/one'>One</Link>
        <span> | </span>
        <Link to='/two'>Two</Link>
      </nav>
      <Outlet />
    </main>
  )
}
```
</details>

Here we can see that theres 2 routes: one and two. The ```Layout``` function is just a page template for our route data. ```Outlet``` component is a built in react components which will be replaced with matched route elements.

Lets now look at a more specific route.

<details>
  <summary>Create a feature route</summary>

```ExampleFeature.jsx```
```.jsx
const routes: RouteObject = {
  path: '/one', 
  element: <Outlet />,
  children: [
    {
      index: true, 
      element: <Redirect path="/one/1" />
    },
    {
      path: '1',
      element: <First />
    },
    {
      path: '2',
      element: <Second />
    },
  ],
};
```

```First.jsx```
```.jsx
export default function First() {
  return <p>Feature 1, page 1</p>;
}
```

```Second.jsx```
```.jsx
export default function Second() {
  return <p>Feature 1, page 1</p>;
}
```
</details>


So basically the feature we made exports a configuration object with 3 routes. So, when the app loads the URL: ```/one```, the ```<Redirect>``` component sends the user to /one/1.

Similar to ```RouterProvider```, ```<Redirect>``` only manages logic. The reason it only handles logic is because theres a convention of embedding layouts to handle specific functionalities. This allows for a clean separation of concerns (UI to Logic). ```<Redirect>``` is responsible for <b>programmatically navigating the user to a different route. </b>

