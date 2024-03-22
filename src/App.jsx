import { useState } from "react";
import "./App.css";
import Abc from "./abc";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 style={{ color: "#458b74" }}>Sandip loves Sonali</h1>
      <Abc />
    </>
  );
}

export default App;
