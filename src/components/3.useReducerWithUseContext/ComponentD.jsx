import React, { useContext } from "react";
import { Data } from "./Component";

function ComponentD() {
  const data = useContext(Data);
  return (
    <>
      Component D value = {data.count}
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
    </>
  );
}

export default ComponentD;
