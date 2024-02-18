import React from 'react';
import './index.scss';
//import './styles.css';

function App() {
  const [ count, setCount ] = React.useState(0)

  const handleCounterChange = (change) => {
    setCount(count + change);
  }

  return (
    <div className="App">
      <div>
        <h2>Counter:</h2>
        <h1>{count}</h1>
        <button onClick={() => handleCounterChange(-1)} className="minus">- Минус</button>
        <button onClick={() => handleCounterChange(1)} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;
