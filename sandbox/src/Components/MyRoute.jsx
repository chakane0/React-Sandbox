import { createBrowserRouter } from 'react-router-dom';

function MyComponent() {
    return <p>Hello, Route 66!</p>;
}

// here we define 
export const router = createBrowserRouter([
    {
        path: '/',
        element: <MyComponent />
    },
]);