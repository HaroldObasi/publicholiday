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
            </div>
        </section>
    );
};

export default CountryInfo;
