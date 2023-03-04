import React from "react";
import Blocks from "./Blocks";
import Card2 from "./Card2";
import Dashboard2 from "./Dashboard2";
const ButtonShare = () => {
  return(
    <button
                type="submit"
                className=" relative lg:right-[-600px] p-2.5 text-sm font-medium text-white bg-orange-600 rounded-r-lg border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >Share With Recruiters</button>
  )
}
const App2 = () => {
  const arr = [
    { text: "STUDENTS", number: 26, color: "red" },
    { text: "DEPARTMENTS", number: 5, color: "blue" },
    { text: "PLACEMENTS", number: 0, color: "green" },
  ];
  return (
    <div>
      <div className=" ml-[60px]">
        {arr.map((element, index) => (
          <Card2 key={index} text={element.text} number={element.number} />
        ))}
      </div>
      <ButtonShare/>
      <Dashboard2/>
    </div>
  );
};

export default App2;
