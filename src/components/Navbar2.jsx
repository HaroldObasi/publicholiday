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
        <header className="px-5 md:px-[6.25rem] py-5">
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
