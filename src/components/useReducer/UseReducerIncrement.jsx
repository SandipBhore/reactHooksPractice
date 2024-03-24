//-------first file---------
import React, { useReducer } from "react";

//----------passing object as an initial value { count: 0 }---------------
const reducer = (state, action) => {
  return { count: state.count + 1 };
};
function UseReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <button onClick={dispatch}>increase</button>
      {state.count}
    </>
  );
}

// -------------------passing single value as initial value------------------
// const reducer = (state, action) => {
//   return state + 1;
// };
// function UseReducer() {
//   const [state, dispatch] = useReducer(reducer, 0);
//   return (
//     <>
//       <button onClick={dispatch}>increase</button>
//       {state}
//     </>
//   );
// }

export default UseReducer;
