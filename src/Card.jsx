import React from "react";

const Card = ({number}) => {
  return (
    <div className="m-[10px]">
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-row space-x-9 ">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Finance
          </h5>
        </a>
        <a href="#" className="absolote left-0">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Know More 
          </h5>
        </a>
        </div>
        <div className="flex flex-row">
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Accounts Finance
        </p>
        <p class="text-green-400/100 ml-[40px]" >{number}</p>
        </div>
        <div className="flex flex-col items-center justify-center">
        <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Tag A Job</button>
        <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-purple-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-purple-600 dark:hover:text-white dark:hover:bg-gray-700">Employees Enrolled</button>
        <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Assign Certificate</button>

        </div>
      </div>
    </div>
  );
};

export default Card;
