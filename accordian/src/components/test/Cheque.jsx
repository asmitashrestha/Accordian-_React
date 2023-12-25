import React, { useEffect, useState } from "react";

const Check = () => {
  const [randValue, setRandValue] = useState("");

  
  const handleClick = () => {
    console.log('hel');
    setRandValue(Number(randValue + 1));
    // console.log("hello", randValue);

  };

// useEffect(() => {
//     // console.log("hello", randValue);
//     handleClick()
//   }, [randValue]);

  return (
    <div>
      <p>{randValue }</p>
      <button onClick={() => handleClick()}>Click Here</button>
    </div>
  );
};

export default Check;