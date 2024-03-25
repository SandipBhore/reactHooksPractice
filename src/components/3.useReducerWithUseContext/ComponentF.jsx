import React, { useContext } from "react";
import { Data } from "./Component";

function ComponentF() {
  const data = useContext(Data);
  return (
    <>
      Component F value = {data.count}
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

export default ComponentF;
