import React, { useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

// this component functionality is not complete
function DonTitleOne() {
  const [count, setCount] = useState(0);
  useDocumentTitle(count);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>`count- ${count}`</button>
    </div>
  );
}

export default DonTitleOne;
