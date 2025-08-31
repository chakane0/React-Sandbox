import './App.css';
import Navigation from "./Components/NavigationComponent"
import StateHook from "./Components/State"
import UseEffectHook from "./Components/useEffectHook"
function App() {
  return (
    <div className="App">
      <Navigation/>

      <h1>Covers State</h1>
      <StateHook/>
      <p>---------------------------------------------------------------------------</p>
      <h1>Covers useEffect</h1>
      <UseEffectHook/>
    </div>
  );
}

export default App;
