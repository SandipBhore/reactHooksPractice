import { useState } from "react";
import "./App.css";
import UseStateUseEffect from "./useStateUseEffect";
import Comp1 from "./components/useContext/contextAPI/Comp1";
import UseContext from "./components/useContext/useContext/UseContext1";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 style={{ color: "#458b74" }}>React Hooks</h1>
      {/* <UseStateUseEffect /> */}

      {/* <Comp1 /> */}

      {/* <UseContext /> */}
    </>
  );
}

export default App;
