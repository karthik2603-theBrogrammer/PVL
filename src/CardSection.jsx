import React from "react";
import Card from "./Card";
const CardSection = () => {
  return (
    <>
    
    <div className="flex flex-row items-center justify-center  flex-wrap">
        <div className="flex flex-row">
            <p className="text-purple-900">Certificates under this Category</p>
        <input type="text" id="disabled-input" aria-label="Search Certificate" class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value="Disabled input" disabled/>

        </div>
      
    </div>
    <div className="flex flex-row ml-[90px] flex flex-row items-center justify-center  flex-wrap"><Card number = {7}/>
      <Card number = {4}/>
      <Card number = {5}/>
      <Card number = {0}/></div>
    </>
  );
};

export default CardSection;
