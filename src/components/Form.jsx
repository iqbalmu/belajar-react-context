import React from "react";
import { useAppContext } from "../context/app-context";

function Form() {
  const [state, dispatch] = useAppContext();

  return (
    <div className="flex items-center flex-col gap-5 py-7">
      <h2 className="text-2xl font-bold">Rewrite Title</h2>
      <input
        type="text"
        className="bg-transparent rounded-full ring-1 px-4 text-center h-10 w-3/4"
        onChange={(e) => {
          dispatch({
            type: 'change-title',
            title: e.target.value
          })
        }}
      />
    </div>
  );
}

export default Form;
