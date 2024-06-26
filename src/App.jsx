import { useState } from "react";
import "./App.css";
import UseStateUseEffect from "./useStateUseEffect";
import ContextAPI from "./components/1.useContext/contextAPI/Comp1";
import UseContextWithThreeComp from "./components/1.useContext/useContext/example1/Comp1";
import UseContext from "./components/1.useContext/useContext/example2/UseContext1";
import UseReducerIncrement from "./components/2.useReducer/UseReducerIncrement";
import UseReducerWithSwitch from "./components/2.useReducer/UseReducerWithSwitch";
import TwoValuesInOneUseReducer from "./components/2.useReducer/TwoValuesInOneUseReducer";
import UseReducerWithUseContext from "./components/3.useReducerWithUseContext/Component";
import UseStateWithAxios from "./components/4.useReducerWithAxios/1.useStateWithAxios/useStateWithAxios";
import UseReducerWithAxios from "./components/4.useReducerWithAxios/2.useReducerWithAxios/useReducerWithAxios";
import UseCallback from "./components/5.useCallback/UseCallback";
import UseRef from "./components/6.useRef/UseRef";
import UseRef2 from "./components/6.useRef/UseRef2";
import UseDocumentTitle from "./components/7.customHooks/1.useDocumentTitle/useDocumentTitle";

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

      {/* <UseReducerWithUseContext /> */}

      {/* <UseStateWithAxios /> */}

      {/* <UseReducerWithAxios /> */}

      {/* <UseCallback /> */}

      {/* <UseRef /> */}

      {/* <UseRef2 /> */}

      <UseDocumentTitle />
    </>
  );
}

export default App;
