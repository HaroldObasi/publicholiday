import React, { useEffect, useState } from "react";
import { getAllCountries } from "../apiCalls/getAllCountries";
import { Link } from "react-router-dom";

const Home = () => {
    const [allCountries, setAllCountries] = useState([]);
    useEffect(() => {
        return async () => {
            const data = await getAllCountries();
            setAllCountries(data);
        };
    }, []);

    return (
        <section className="px-0 md:px-10 font-primary text-dark">
            <div className="bg-lightBlue w-full py-4 px-5 ">
                <div className="space-y-2 mb-5">
                    <p className="text-[28px] font-medium">Holidays</p>
                    <p className="text-base font-normal">
                        Discover holidays and other significant days celebrated
                        in countries around the world.
                    </p>
                </div>

                <p className="text-lg">All countries</p>

                <div className="overflow-x-auto relative mt-5">
                    <table className="border-collapse w-full text-base text-dark text-left">
                        <thead className="bg-transparent">
                            <tr>
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
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {allCountries.map((item) => (
                                <tr
                                    className="p-5 bg-white my-5 hover:bg-gray-100 cursor-pointer"
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
                                    <td className="py-4 px-6">{item.region}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Home;
