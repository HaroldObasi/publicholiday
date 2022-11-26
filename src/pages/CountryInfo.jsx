import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { getCountryHoliday } from "../apiCalls/getCountryHoliday";

const CountryInfo = () => {
  const { countryName } = useParams();
  const [holidays, setHolidays] = useState([]);

  const locArray = window.location.href.split("/");
  const countryCode = locArray[locArray.length - 1];
  useEffect(() => {
    return async () => {
      const locArray = window.location.href.split("/");
      const countryCode = locArray[locArray.length - 1];
      const url = ` https://holidayapi.com/v1/holidays?pretty&key=cf7765ac-5c8a-45b8-b923-c0b731ac4726&country=${countryCode}&year=2021`;
      const holidayData = await getCountryHoliday(url);
      console.log(holidayData.holidays)
      setHolidays(holidayData.holidays);
    };
  }, [countryName]);

  console.log(holidays);
  return (
    <>
      <section className="px-5 md:px-[6.25rem] md:mt-14 font-primary text-dark">
        <div className="bg-lightBlue w-full py-4 px-5 ">
          <div className="space-y-2 mb-5">
            <p className="text-[28px] font-medium">Holidays</p>
            <p className="text-base font-normal">
              Discover holidays and other significant days celebrated in
              countries around the world.
            </p>
          </div>

          <p className="text-lg">{countryCode}</p>

          <div className="overflow-x-auto relative mt-5">
            <table className="border-collapse w-full text-base text-dark text-left">
              <thead className="bg-transparent">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    Date
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Name
                  </th>
                </tr>
              </thead>
              <tbody>
                {holidays.map((item) => (
                  <>
                    <tr className="p-5 bg-white my-5">
                      <td className="py-4 px-6">{item.date}</td>

                      <td className="py-4 px-6">{item.name}</td>
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
    </>
  );
};

export default CountryInfo;
