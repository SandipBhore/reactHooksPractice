import { useState } from "react";
import "./App.css";
import UseStateUseEffect from "./useStateUseEffect";
import ContextAPI from "./components/useContext/contextAPI/Comp1";
import UseContextWithThreeComp from "./components/useContext/useContext/example1/Comp1";
import UseContext from "./components/useContext/useContext/example2/UseContext1";
import UseReducerIncrement from "./components/useReducer/UseReducerIncrement";
import UseReducerWithSwitch from "./components/useReducer/UseReducerWithSwitch";
import TwoValuesInOneUseReducer from "./components/useReducer/TwoValuesInOneUseReducer";
import UseReducerWithUseContext from "./components/useReducerWithUseContext/Component";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 style={{ color: "#458b74" }}>React Hooks</h1>
      {/* <UseStateUseEffect /> */}

      {/* <ContextAPI /> */}

      {/* <UseContext /> */}

      {/* <UseContextWithThreeComp /> */}

      {/* <UseReducerIncrement /> */}

      {/* <UseReducerWithSwitch /> */}

      {/* <TwoValuesInOneUseReducer /> */}

      <UseReducerWithUseContext />
    </>
  );
}

export default App;
