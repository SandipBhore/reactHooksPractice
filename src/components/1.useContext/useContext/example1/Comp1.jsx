import React, { useContext } from "react";
import Comp2 from "./Comp2";

export const User = React.createContext();

function Comp1() {
  return (
    <User.Provider
      value={
        "value passing using useContext hook and coming from Comp1 Component"
      }
    >
      <Comp2 />
    </User.Provider>
  );
}

export default Comp1;
