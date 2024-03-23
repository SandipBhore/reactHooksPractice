import React, { createContext } from "react";
import Comp2 from "./Comp2";

// step 1- creating context and exporting it
export const UserContext = React.createContext();

function Comp1() {
  return (
    <>
      {/* step 2- wrapping the component in provider where we will be using the value */}

      <UserContext.Provider value={"Sandip"}>
        <Comp2 />
      </UserContext.Provider>
    </>
  );
}

export default Comp1;
