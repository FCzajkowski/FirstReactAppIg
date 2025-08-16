import './App.css';
import { useState } from 'react';
import ReactDOM from 'react-dom';

function Counter() { 
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>
        My React App
      </h1>
      <Counter />
    </div>
  );
}
export default App;
