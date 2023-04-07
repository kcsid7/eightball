import EightBall from "./EightBall.js";

import './App.css';

import data from "./data/eightball_data.js";

function App() {

  return (
    <div className="App" style={{margin: "5rem"}}>
        <EightBall predictions={data} />
    </div>
  );
}

export default App;
