import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Link to="/q1" className="m-8 text-bold text-[100px]">Q1</Link>
      <Link to="/q2"className="m-8 text-bold text-[100px]" >Q2</Link>
    </div>
  );
};

export default Home;
