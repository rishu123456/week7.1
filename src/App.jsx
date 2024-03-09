import { createContext, useContext, useState } from 'react';

// Create context with default value
export const CountContext = createContext(0);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Provide only the count value */}
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </div>
  );
}

function Button({ setCount }) {
  const count = useContext(CountContext);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

function Count({ setCount }) {
  return (
    <div>
      <CountRender />
      <Button setCount={setCount} />
    </div>
  );
}

function CountRender() {
  const count = useContext(CountContext);
  return (
    <div>
      {count}
    </div>
  );
}

export default App;
