import React from "react";
import more from "../assets/more.png"

const EachCountry = () => {
  return (
    <div className="bg-white flex items-center  py-1 mb-3">
      <div className=" text-center px-5">1.</div>
      <div className="w-1/12">Flags</div>
      <div className="w-3/12 text-strongBlue">Country Name</div>
      <div className="w-3/12">Continent</div>
      <div className="w-3/12 text-slate-400">Status</div>
      <div className="w-1/12">
        <img src={more} alt="" />
      </div>
    </div>
  );
};

export default EachCountry;
