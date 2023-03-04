import React from "react";

const Card = ({number, color,text}) => {
  return (
    <div className='bg-red-500 h-[150px] w-[300px] m-[20px] flex rounded-[20px]  items-center pl-[10px]'>
        <div>
            <p>{text}</p>
            <h1>{number}</h1>
        </div>

    </div>
  );
};

export default Card;
