import React, { useReducer } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

export const Data = React.createContext();
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
  }
};
function Component() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1>Component value {count}</h1>
      <Data.Provider value={{ count: count, dispatchData: dispatch }}>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </Data.Provider>
    </div>
  );
}

export default Component;
