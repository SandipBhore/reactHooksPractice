import React, { useEffect } from "react";
import DocTitleOne from "./DocTitleOne";
import DocTitleTwo from "./DonTitleTwo";

function useDocumentTitle(count) {
  useEffect(() => {
    console.log(count);
    document.title = `count- ${count}`;
  }, [count]);
  return (
    <div>
      <DocTitleOne />
      <DocTitleTwo />
    </div>
  );
}

export default useDocumentTitle;
