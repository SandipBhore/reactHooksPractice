import React, { useContext } from "react";
import { Data } from "./Component";

function ComponentA() {
  const data = useContext(Data);
  return (
    <div>
      Component A value = {data.count}
      <button
        onClick={() => {
          data.dispatchData("increment");
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          data.dispatchData("decrement");
        }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          data.dispatchData("reset");
        }}
      >
        reset
      </button>
    </div>
  );
}

export default ComponentA;
