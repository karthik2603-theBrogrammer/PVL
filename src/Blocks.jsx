import React from "react";

const Block = ({ text, number, color }) => {
  return (
    <div
      className={`h-[150px] w-[500px] flex flex-col flex-wrap items-center ${
        color === "red"
          ? "bg-red-600"
          : color === "blue"
          ? "bg-blue-600"
          : color === "green"
          ? "bg-green-600"
          : ""
      }  justify-center m-[70px] rounded-[10px]`}
    >
      <p className="font-bolder relative left-[-10px] top-[-10px]">{text}</p>
      <h1 className="relative left-[-10px] top-[10px]">{number}</h1>
    </div>
  );
};

const Blocks = () => {
  const arr = [
    { text: "STUDENTS", number: 26, color:'red' },
    { text: "DEPARTMENTS", number: 5,color:'blue' },
    { text: "PLACEMENTS", number: 0 ,color:'green'},
  ];
  return (
    <div className="flex flex-row md:ml-[200px]">
      {arr.map((element, index) => (
        <Block text={element.text} number={element.number} color = {element.color} key = {index}/>
      ))}
    </div>
  );
};

export default Blocks;
