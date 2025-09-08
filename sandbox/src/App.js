import './App.css';
import Navigation from "./Components/NavigationComponent"
import StateHook from "./Components/State"
import UseEffectHook from "./Components/useEffectHook"
import Hello from "./Components/Fundamental/Hello"
import ConditionalRenderPractice from "./Components/Fundamental/ConditionalRenderPractice"
function App() {
  return (
    <div className="App">
      <Navigation/>
      <p>---------------------------------------------------------------------------</p>
      <h1>Covers Fundamentals</h1>
      <Hello/>
      <ConditionalRenderPractice/>
      <p>---------------------------------------------------------------------------</p>
      <h1>Covers State</h1>
      <StateHook/>
      <p>---------------------------------------------------------------------------</p>
      <h1>Covers useEffect</h1>
      <UseEffectHook/>
      <p>---------------------------------------------------------------------------</p>
      <p>---------------------------------------------------------------------------</p>
    </div>
  );
}

export default App;
