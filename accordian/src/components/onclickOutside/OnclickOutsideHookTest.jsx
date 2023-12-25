import React, { useRef, useState } from "react";
import OnclickOutsideHook from "./OnclickOutsideHook";

const OnclickOutsideHookTest = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  OnclickOutsideHook(ref, () => setShowContent(false));

  return (
    <div className="flex justify-center text-center mt-9 ">
      {showContent ? (
        <div ref={ref}>
          <p>This is a content of this page</p>
          <p>please click outside to hide this content</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
};

export default OnclickOutsideHookTest;
