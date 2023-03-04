import React, { useState } from "react";
const TextComponent = ({ heading, text }) => {
  return (
    <div className="p-6 bg-gray-500 opacity-[0.9] m-6">
      <h3 className="text-blue-900">{heading}</h3>
      <p>{text}</p>
    </div>
  );
};
import DonutChart from "react-donut-chart";
const Donught = ({ fullPercentage, text, number1, number2 }) => {
  const [myText, setMyText] = useState(text);
  const [myPercentage, setMyPercentage] = useState(fullPercentage);

  return (
    <div className="bg-gray-600 m-6 rounded-md">
      <h3>Placement Exam history</h3>
      <DonutChart
        className="text-blue-300"
        interactive={true}
        data={[
          {
            label: myText,
            value: fullPercentage,
          },
          {
            label: "Remaining",
            value: 100 - fullPercentage,
            isEmpty: true,
          },
        ]}
      />
      <div className="flex flex-col flex items-center justify-center">
        <div className="flex flex-row w-full">
        <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">{number1}</button>
        <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">{number2}</button>

        </div>
        <div className="flex flex-col"></div>
      </div>
    </div>
  );
};

const Dashboard2 = () => {
  const arr = [
    {
      heading: "Placement Tests",
      text: "No Placement Have been scheduled yet",
    },
    { heading: "Pre-Assesments", text: "No Placement Have been scheduled yet" },
  ];
  return (
    <div className="my-[100px]">
      <h2 className="text-green-400">Upcoming Placement opportunities</h2>
      <div className="flex flex-row">
        {arr.map((element, index) => (
          <TextComponent
            heading={element.heading}
            text={element.text}
            key={index}
          />
          // <p>jbj</p>
        ))}
      </div>
      <Donught fullPercentage={3.8} text="students" number1={1} number2 = {1} />
      <Donught fullPercentage={30.8} text="students" number1={86} number2 = {8} />
    </div>
  );
};

export default Dashboard2;
