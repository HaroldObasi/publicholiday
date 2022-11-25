import axios from "axios";
const key = "cf7765ac-5c8a-45b8-b923-c0b731ac4726";

export const getCountryHoliday = async (url) => {
    try {
        const response = await axios.get(url);
        // const response = await axios.get(
        //     `https://holidayapi.com/v1/holidays?pretty&key=${key}&country=${code}&year=2021`
        // );

        return response.data;
    } catch (error) {
        console.log("axios error: ", error);
    }
};
