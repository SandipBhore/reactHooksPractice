import React, { useEffect, useRef } from "react";

function UseRef() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input ref={inputRef} type="text" name="" id="" />
    </div>
  );
}

export default UseRef;
