import React from "react";
import UseContext2 from "./UseContext2";

export const UserContext = React.createContext();

function UseContext1() {
  return (
    <>
      <UserContext.Provider value={"value passing using useContext hook"}>
        <UseContext2 />
      </UserContext.Provider>
    </>
  );
}

export default UseContext1;
