import React from "react";
import { UserContext } from "./Comp1";

function Comp3() {
  return (
    <>
      {/* step-3 - consumming the value */}

      <UserContext.Consumer>{(user) => <p>{user}</p>}</UserContext.Consumer>
    </>
  );
}

export default Comp3;
