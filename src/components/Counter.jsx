import React from "react";
import { useAppContext } from "../context/app-context";

function Counter() {

  const context = useAppContext()

  function addCount() {
    context.setCount( e => e + 1)
  }

  function minCount() {
    if(context.count > 0) {
      context.setCount( e => e - 1)
    }
  }

  return (
    <div className="flex flex-col items-center gap-10 py-5">
      <h1 className="text-3xl font-bold">Counter</h1>
      <div className="flex gap-8">
        <button onClick={addCount}>
          <i className="fa-solid hover:opacity-80 fa-circle-up text-8xl"></i>
        </button>
        <button onClick={minCount}>
          <i className="fa-regular hover:opacity-80 fa-circle-down text-8xl"></i>
        </button>
      </div>
      <p>" Click to <strong>UP</strong> or <strong>DOWN</strong>  "</p>
    </div>
  );
}

export default Counter;
