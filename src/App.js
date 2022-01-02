import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <h1 className="heading font-weight-lighter">
        What would you like to search for today?
      </h1>
      <h2 className="mt-5 font-weight-normal">DICTIONARY SEARCH</h2>
      <Dictionary />
    </div>
  );
}

export default App;
