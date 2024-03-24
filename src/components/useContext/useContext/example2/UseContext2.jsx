import React, { useContext } from "react";
import { UserContext } from "./UseContext1";

function UseContext2() {
  const user = useContext(UserContext);
  return <div>{user}</div>;
}

export default UseContext2;
