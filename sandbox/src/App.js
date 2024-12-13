import './App.css';
import { Users } from './components/Users';
/*
  We will have a React component called Users which will only setup and use the API data. 

  The API fetch will be abstracted away in a file called MockAPI
*/
function App() {
  return (
    <div className="App">
      <Users />
    </div>
  );
}

export default App;
