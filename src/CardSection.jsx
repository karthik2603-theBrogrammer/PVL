import React from "react";
import Card from "./Card";
const CardSection = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center  flex-wrap">
        <div className="flex flex-row">
          <p className="text-purple-900 ml-[100px]">Certificates under this Category</p>
          <div className="flex ml-[400px]">
            {/* <label for="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label> */}

            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Search"
                required
              />
              <button
                type="submit"
                className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row lg:ml-[200px] sm:ml-[100px] flex flex-row items-center justify-center  flex-wrap">
        <Card number={7} />
        <Card number={4} />
        <Card number={5} />
        <Card number={0} />
      </div>
    </>
  );
};

export default CardSection;
