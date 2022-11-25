import React from "react";

import search from "../assets/search.png";
import pin from "../assets/pin.png";
const Navbar = () => {
  return (
    <>
      <nav className="nav grid items-center w-screen h-[7.5rem] bg-white">
        <div className="mx-[100px] flex items-center  justify-between">
          <h1 className="text-headerBlue text-4xl font-header font-bold">
            Public Holiday
          </h1>

          <div className="flex items-center">
            <div className=" bg-lightBlue px-4 py-2 ">
              <img
                className="inline-block mr-2 my-auto"
                width={18}
                src={search}
                alt="Search"
              />
              <input
                type="text"
                className=" border-2 bg-transparent text-lg"
                placeholder="Search"
                id=""
              />
            </div>
            <div className="ml-3">
              <p className="text-slate-500 text-xl inline-block underline">Nigeria</p>
              <img
                className="inline-block ml-2 my-auto"
                width={18}
                src={pin}
                alt="Location Pin"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
