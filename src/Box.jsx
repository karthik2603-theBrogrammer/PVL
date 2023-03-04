import React from "react";

const Box = ({number, color}) => {
  return (
    <span className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded ${color === 'white' ? 'text-black' : 'text-white' } ${color === 'white' ? 'bg-white' : 'bg-blue-900' } uppercase last:mr-0 mr-1`}>
      {number}
    </span>
  );
};

export default Box;
