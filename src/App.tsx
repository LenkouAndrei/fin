import "./App.scss";
import { calc } from "./services/calc";

function App() {
  return <h1>`Hello! ${calc(2,10)}`</h1>;
}

export default App;
