//-------third file---------
import React, { useReducer } from "react";

const reducer = (state, action) => {
  //----------both 'switch' & 'if,else' will work in same way---------------

  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.value };
    //using action.values to increament and decrement values
    case "decrement":
      return { ...state, count: state.count - action.value };
    case "increment1":
      return { ...state, count1: state.count1 + action.value };
    case "decrement1":
      return { ...state, count1: state.count1 - action.value };
    case "reset":
      return { count: action.value, count1: action.value };
    default:
      return state;
  }
};

function UseReducerWithSwitch() {
  const [state, dispatch] = useReducer(reducer, { count: 0, count1: 0 });

  function incr() {
    //while passing dispatch action type we are also passing some values
    dispatch({ type: "increment", value: 1 });
  }
  function decr() {
    dispatch({ type: "decrement", value: 1 });
  }
  function incr1() {
    dispatch({ type: "increment1", value: 5 });
  }
  function decr1() {
    dispatch({ type: "decrement1", value: 5 });
  }
  function reset() {
    dispatch({ type: "reset", value: 0 });
  }
  return (
    <div>
      <h1>UseReducerWithSwitch</h1>
      <h1>{state.count}</h1>

      <button onClick={incr}>increment</button>
      <button onClick={decr}>decrement</button>
      <h1>{state.count1}</h1>
      <button onClick={incr1}>increment1</button>
      <button onClick={decr1}>decrement1</button>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default UseReducerWithSwitch;
