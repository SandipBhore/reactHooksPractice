//-------second file---------
import React, { useReducer } from "react";

const reducer = (state, action) => {
  //----------both 'switch' & 'if,else' will work in same way---------------

  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "square":
      return { count: state.count ** 2 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }

  // if (action.type == "increment") {
  //     return { count: state.count + 1 };
  // } else {
  //     return { count: state.count - 1 };
  // }
};
function UseReducerWithSwitch() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function incr() {
    dispatch({ type: "increment" });
  }
  function decr() {
    dispatch({ type: "decrement" });
  }
  function square() {
    dispatch({ type: "square" });
  }
  function reset() {
    dispatch({ type: "reset" });
  }
  return (
    <div>
      <h1>UseReducerWithSwitch</h1>
      <h1>{state.count}</h1>
      <button onClick={incr}>increment</button>
      <button onClick={decr}>decrement</button>
      <button onClick={square}>square</button>
      <div>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
}

export default UseReducerWithSwitch;
