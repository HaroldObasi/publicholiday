import React from "react";
import search from "../assets/search.png";
import pin from "../assets/pin.png";
import { useParams } from "react-router-dom";

const Navbar = () => {
  const { location } = useParams();


  return (
    <>
      <nav className="nav grid items-center w-screen h-[7.5rem] bg-white">
        <div className=" mx-2 md:mx-[6.25rem] md:flex items-center  justify-between">
          <h1 className="text-headerBlue text-2xl mb-2 md:text-4xl font-header font-bold">
            Public Holiday
          </h1>

          <div className="flex items-center">
            <div className=" bg-lightBlue w-1/2 px-4 md:w-96 py-1 ">
              <img
                className="inline-block mr-2 my-auto"
                width={18}
                src={search}
                alt="Search"
              />
              <input
                type="text"
                className="bg-transparent  md:text-lg"
                placeholder="Search"
                id=""
              />
            </div>
            <div className="ml-3 w-4/12">
              <p className="text-slate-500 md:text-xl inline-block underline">{location}</p>
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
