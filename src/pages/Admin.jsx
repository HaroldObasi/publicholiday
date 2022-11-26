import plus from "../assets/plus.png";
import calendar from "../assets/calender.png";
import React, { useEffect, useState } from "react";
import { getAllCountries } from "../apiCalls/getAllCountries";
import more from "../assets/more.png";
import { useParams } from "react-router-dom";


const Admin = () => {
  const [allCountries, setAllCountries] = useState([]);
  const params = useParams()
  console.log(params, "12")
  useEffect(() => {
    return async () => {
      const data = await getAllCountries();
      setAllCountries(data);
    };
  }, []);


  return (
    <section className="px-5 md:px-[6.25rem] md:mt-14 font-primary text-dark">
    <div className="bg-lightBlue w-full py-4 px-5 md:p-[3.125rem] ">
      <div className="space-y-2 mb-5">
        <h2 className="font-medium text-3xl">Admin Panel</h2>
        <p className="font-normal text-base mb-8">
        Add and make edit to the holidays.
        </p>

        <h3 className="font-medium text-xl mb-5">Countries</h3>
        <hr />
        <div className="flex gap-2 md:p-5 justify-between md:justify-end">
          <div className="bg-white p-2">
            <button className="mx-3 text-slate-500 flex items-center" name="" id="">
              <i className="mr-3"><img src={plus} alt="" /></i>
              Add Holiday
            </button>
          </div>
          <div className="bg-white p-2">
            <button className="mx-3 text-slate-500 flex items-center" name="" id="">
              <i className="mr-3"><img src={calendar} alt="" /></i>
              Calendar
            </button>
          </div>
        </div>

        <div className="overflow-x-auto relative mt-5">
          <table className="border-collapse w-full text-base text-dark text-left">
            <thead className="bg-transparent">
              <tr>
                <th></th>
                <th scope="col" className="py-3 px-6">
                  Flag
                </th>
                <th scope="col" className="py-3 px-6">
                  Country
                </th>
                <th scope="col" className="py-3 px-6">
                  Continent
                </th>
                <th scope="col" className="py-3 px-6">
                  More
                </th>
              </tr>
            </thead>
            <tbody>
              {allCountries.map((item, index) => (
                <>
                  <tr
                    className="p-5 bg-white my-5 hover:bg-gray-100 cursor-pointer"
                    key={item.area}
                    onClick={() =>
                      (window.location.href = `country/${item.alpha2Code}`)
                    }
                  >
                    <td className="px-4">{index + 1}</td>
                    <td className="py-4 px-6">
                      <img
                        className="w-[50px]"
                        src={item.flag}
                        alt="Coutry flag"
                      />
                    </td>
                    <td className="py-4 px-6">{item.name}</td>
                    <td className="py-4 px-6">{item.region}</td>
                    <td className="px-6">
                      <img src={more} alt="" />
                    </td>
                  </tr>
                  <tr className="h-2">
                    <td colSpan={6}></td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Admin;
