import './App.css';
import Navigation from "./Components/NavigationComponent"
import StateHook from "./Components/State"
function App() {
  return (
    <div className="App">
      <Navigation/>

      <h1>Covers State</h1>
      <StateHook/>
      <p>---------------------------------------------------------------------------</p>
      <h1>Covers useEffect</h1>

    </div>
  );
}

export default App;
