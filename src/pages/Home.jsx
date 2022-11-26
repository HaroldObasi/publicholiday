import React, { useEffect, useRef, useState } from "react";
import { getAllCountries } from "../apiCalls/getAllCountries";
import { Link } from "react-router-dom";
import more from "../assets/more.png";
import search from "../assets/search.png";

const Home = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [searchedCountries, setSearchedCountries] = useState([]);

  useEffect(() => {
    return async () => {
      const data = await getAllCountries();
      setAllCountries(data);
    };
  }, []);

  let input = useRef();

  const searchCountries = (e) => {
    input.current = e.target.value;
    if (input.current == "") {
      setSearchedCountries([]);
    }
    let userInput = new RegExp(input.current);
    // console.log({userInput, userIn})
    const matches = allCountries.filter((value) => {
      let countryName = value.name;

      return userInput.test(countryName.toLowerCase());
    });
    console.log(matches);
    setSearchedCountries(matches);

    setTimeout(() => {
      setSearchedCountries([]);
    }, 5000);
  };

  return (
    <section className="px-5 md:px-[6.25rem] md:mt-14 font-primary text-dark">
      <div className="bg-lightBlue w-full py-4 px-5 md:p-[3.125rem] ">
        <div className="space-y-2 mb-5">
          <h2 className="font-medium text-3xl">Holidays</h2>
          <p className="font-normal text-base mb-8">
            Discover Holidays and other significant holidays celebrated around
            the world
          </p>
        </div>

        <h3 className="font-medium text-xl mb-5"> All Countries</h3>
        <hr />

        <div className="flex  gap-2 p-5 justify-end">
          <div className="bg-white relative flex items-center px-4 py-2">
            <img
              className="inline-block mr-2 my-auto"
              width={15}
              src={search}
              alt="Search"
            />
            <input
              ref={input}
              onChange={(e) => searchCountries(e)}
              className="inline-block"
              type="text"
              placeholder="Search for Country "
              name=""
              id=""
            />
            {searchedCountries === [] ? (
              ""
            ) : (
              <div className="absolute z-20 top-16 p-5 bg-lightBlue">
                <table>
                  {searchedCountries.map((item, index) => (
                    <>
                      <tr
                        className="p-5 bg-white my-5 hover:bg-gray-100  cursor-pointer"
                        key={item.area}
                        onClick={() =>
                          (window.location.href = `country/${item.alpha2Code}`)
                        }
                      >
                        <td className="py-4 px-6">
                          <img
                            className="w-[50px]"
                            src={item.flag}
                            alt="Coutry flag"
                          />
                        </td>
                        <td className="py-4 px-6">{item.name}</td>
                      </tr>
                      <tr className="h-2">
                        <td colSpan={6}></td>
                      </tr>
                    </>
                  ))}
                </table>
              </div>
            )}
          </div>

          <div className="hidden md:block bg-white p-2">
            <select className="mx-4 text-slate-500" name="" id="">
              <option value=""> Alphabetic Order</option>
              <option value=""> Continent</option>
              <option value=""> Region</option>
              <option value=""> Postal Code</option>
            </select>
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
    </section>
  );
};

export default Home;
