import React, { useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

const DocumentTitleOne: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  // Custom Hook to update Browser Tab title
  useDocumentTitle(count);

  return (
    <div>
      <p>Update document title of Browser Tab by below CTA</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Count: {count}
      </button>
    </div>
  );
};

export default DocumentTitleOne;
