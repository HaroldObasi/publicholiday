import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "../assets/PublicHoliday.png";
import locationIcon from "../assets/Vector.png";

const Navbar2 = () => {
    const [userCountry, setUserCountry] = useState("");
    const [coordinate, setCoordinate] = useState({});

    useEffect(() => {
        const success = (position) => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            setCoordinate({
                latitude: lat,
                longitude: long,
            });
        };
        navigator.geolocation.getCurrentPosition(success, () => {
            console.log("error");
        });
    }, []);

    useEffect(() => {
        const fetchData = async (position) => {
            try {
                const response = await axios.get(
                    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.latitude}&longitude=${position.longitude}&localityLanguage=en`
                );
                setUserCountry(response.data.countryName);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData(coordinate);
    });
    return (
        <header className="px-5 md:px-10 py-5">
            <div className="flex flex-col md:flex-row md:justify-between w-full md:items-center space-y-3 md:space-y-0">
                <div className="basis-1/4">
                    <img src={logo} alt="" className="w-[112px] md:w-[286px]" />
                    <label
                        for="default-search"
                        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                        Search
                    </label>
                </div>
                {/* <div className="flex justify-center gap-2 items-center basis-3/4">
                    <div class="relative w-full md:mx-20">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                                aria-hidden="true"
                                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                ></path>
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            class="block w-full bg-lightBlue py-3 px-4 pl-10 text-sm text-dark"
                            placeholder="Search Countries"
                            required
                        />
                    </div>
                    <div className="flex space-x-1">
                        <p className="underline text-[#888888]">
                            {userCountry?.length > 1 ? (
                                <>{userCountry}</>
                            ) : (
                                <>Loading</>
                            )}
                        </p>
                        <img src={locationIcon} alt="" />
                    </div>
                </div> */}
                <div className="flex space-x-1">
                    <p className="underline text-[#888888]">
                        {userCountry?.length > 1 ? (
                            <>{userCountry}</>
                        ) : (
                            <>Loading</>
                        )}
                    </p>
                    <img src={locationIcon} alt="" />
                </div>
            </div>
        </header>
    );
};

export default Navbar2;
