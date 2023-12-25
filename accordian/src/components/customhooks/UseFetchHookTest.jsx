import React from "react";
import UseFetchHook from "./UseFetchHook";

const UseFetchHookTest = () => {
  const { data, error, pending } = UseFetchHook(
    "https://dummyjson.com/products",
    {}
  );

  console.log(error, data, pending);

  return (
    <div>
      <h1>usefetch hook test</h1>
      {
      pending ? 
      <h1>Data is in pending</h1>
      : null}
      {
      error ? <h1>Error occured</h1>
      :null
    } 
      {data && data.products && data.products.length
        ? data.products.map((productItem, index) => (
            <p key={index}>{productItem.title}</p>
          ))
        : null}
    </div>
  );
};

export default UseFetchHookTest;
