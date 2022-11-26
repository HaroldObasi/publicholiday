import axios from "axios";

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
