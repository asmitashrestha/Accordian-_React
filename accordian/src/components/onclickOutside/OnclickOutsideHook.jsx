import React, { useEffect } from "react";

const OnclickOutsideHook = (ref, handler) => {

  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      handler(e);
    };

    document.addEventListener("mousedown",listener)
    document.addEventListener("touchstart",listener)

    return ()=>{
      document.removeEventListener("mousedown",listener)
      document.removeEventListener("touchstart",listener)
    }
  }, [handler, ref]);

  return <div></div>;
};

export default OnclickOutsideHook;
