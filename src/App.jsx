import { useState } from "react";
import "./App.css";
import UseStateUseEffect from "./useStateUseEffect";
import Comp1 from "./components/useContext/contextAPI/Comp1";
import Component1 from "./components/useContext/useContext/example1/Comp1";
import UseContext from "./components/useContext/useContext/example2/UseContext1";
import UseReducerIncrement from "./components/useReducer/UseReducerIncrement";
import UseReducerWithSwitch from "./components/useReducer/UseReducerWithSwitch";
import TwoValuesInOneUseReducer from "./components/useReducer/TwoValuesInOneUseReducer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 style={{ color: "#458b74" }}>React Hooks</h1>
      {/* <UseStateUseEffect /> */}

      {/* <Comp1 /> */}

      <UseContext />

      {/* <Component1 /> */}

      {/* <UseReducerIncrement /> */}

      {/* <UseReducerWithSwitch /> */}

      {/* <TwoValuesInOneUseReducer /> */}
    </>
  );
}

export default App;
