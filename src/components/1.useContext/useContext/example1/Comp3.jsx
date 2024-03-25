import React, { useContext } from "react";
import { User } from "./Comp1";

function Delete3() {
  const user = useContext(User);
  return <div>{user}</div>;
}

export default Delete3;
