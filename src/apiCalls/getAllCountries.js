import axios from "axios";

const ALL_COUNTRIES_URL = "https://restcountries.com/v2/all";
export async function getAllCountries() {
    const response = await axios.get(ALL_COUNTRIES_URL);
    console.log(response.data);
    return response.data;
}
