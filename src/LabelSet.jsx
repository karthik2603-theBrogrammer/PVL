import React from "react";
import Label from "./Label";
import { CloseButton } from "@chakra-ui/react";

const LabelSet = () => {
  const arr = [
    "Finance",
    "Electronics",
    "ContentWriting",
    "Media And Communications",
    "Finance",
    "Electronics",
    "ContentWriting",
    "Media And Communications",
  ];
  return (
    <div className="lg:ml-[200px] sm:ml-[300px]">
      <div className="flex flex-row lg:ml-[100px] sm:ml-[300px] w-[300px]">
        <p className="w-[300px]">
          Assert Admin {">"}{" "}
          <span className="font-bold w-[300px]">Manage Categories</span>
        </p>
        <div className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900  ml-[150px] lg:ml-[500px] w-[190px] h-[40px] flex flex row">
          <span className="w-[100px]">New Category</span>
          <CloseButton/>
        </div>
      </div>
      <div className="lg:ml-[100px] mb-[100px] flex flex-wrap flex-row ">
        {arr.map((value, index) => (
          <Label text={value} key={index} />
        ))}
      </div>
    </div>
  );
};

export default LabelSet;
