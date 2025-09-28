import { useState } from "react";
import "./App.css";

// ✅ Custom Hook
function useCounter() {
  const [count, setCount] = useState(0);

  // safer way to update state
  function increaseCount() {
    setCount((prev) => prev + 1);
  }

  return {
    count,
    increaseCount,
  };
}

// ✅ Main App Component
function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Custom Hook Counter Example</h2>
      <Counter />
      <Counter />
    </div>
  );
}

// ✅ Counter Component
function Counter() {
  const { count, increaseCount } = useCounter();

  return (
    <div style={{ marginBottom: "10px" }}>
      <button onClick={increaseCount}>Click {count}</button>
    </div>
  );
}

export default App;
