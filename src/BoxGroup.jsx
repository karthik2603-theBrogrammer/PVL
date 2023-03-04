import React from "react";
import Box from "./Box";
const BoxGroup = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className="relative lg:left-[500px] left-[100px] mt-[100px]">
      {arr.map((element, index) => (
        <Box
          color={`${element === 1 ? "white" : "blue"}`}
          number={element}
          key={index}
        />
      ))}
    </div>
  );
};

export default BoxGroup;
