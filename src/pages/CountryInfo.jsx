import React from "react";

const CountryInfo = () => {
    return (
        <section className="px-5 font-primary text-dark">
            <div className="bg-lightBlue w-full py-4 px-5 ">
                <div className="space-y-2 mb-5">
                    <p className="text-[28px] font-medium">Holidays</p>
                    <p className="text-base font-normal">
                        Discover holidays and other significant days celebrated
                        in countries around the world.
                    </p>
                </div>

                <select
                    name=""
                    id=""
                    className="text-xl bg-transparent font-medium"
                >
                    <option value="Afghanistan">Afgahanistan</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Argentina">Argentina</option>
                </select>

                <div className="overflow-x-auto relative mt-5">
                    <table className="border-collapse w-full text-base text-dark text-left">
                        <thead className="bg-transparent">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Date
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Day
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Name
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Type
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="p-5 bg-white my-5">
                                <td className="py-4 px-6">20 March</td>
                                <td className="py-4 px-6">Saturday</td>
                                <td className="py-4 px-6">March Equinox</td>
                                <td className="py-4 px-6">Season</td>
                            </tr>
                            <tr className="p-5 bg-white my-5">
                                <td className="py-4 px-6">20 March</td>
                                <td className="py-4 px-6">Saturday</td>
                                <td className="py-4 px-6">March Equinox</td>
                                <td className="py-4 px-6">Season</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default CountryInfo;
