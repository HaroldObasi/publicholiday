import React from "react";
import search from "../assets/search.png";
import EachCountry from "./EachCountry";

const AllCountriesBody = () => {
  return (
    <div className="text-dark">
      <div className="mx-[6.25rem] min-h-screen px-14 pt-7 bg-lightBlue mt-14">
        <h2 className="font-medium text-3xl">Holidays</h2>
        <p className="font-normal text-base mb-8">
          Discover Holidays and other significant holidays celebrated around the
          world
        </p>

        <h3 className="font-medium text-xl mb-5">Countries</h3>
        <hr />
        <div className="flex gap-2 p-5 justify-end">
          <div className="bg-white px-4 py-2">
            <img
              className="inline-block mr-2 my-auto"
              width={15}
              src={search}
              alt="Search"
            />
            <input
              type="text"
              placeholder="Search for Holidays "
              name=""
              id=""
            />
          </div>
          <div className="bg-white p-2">
            <select className="mx-4 text-slate-500" name="" id="">
              <option value=""> Alphabetic Order</option>
            </select>
          </div>
        </div>

        <div>
          <div className="flex font-normal mb-5">
            <div className="px-5 text-lightBlue">..</div>
            <div className="w-1/12">Flags</div>
            <div className="w-3/12">Country Name</div>
            <div className="w-3/12">Continent</div>
            <div className="w-3/12">Status</div>
            <div className="w-1/12"></div>
          </div>
          <div>
            <EachCountry />
            <EachCountry />
            <EachCountry />
            <EachCountry />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCountriesBody;
