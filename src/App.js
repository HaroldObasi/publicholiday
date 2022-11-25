import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar2 from "./components/Navbar2";
import Home from "./pages/Home";
import CountryInfo from "./pages/CountryInfo";
import AllCountries from "./pages/AllCountries";
import { getAllCountries } from "./apiCalls/getAllCountries";

function App() {
    // const [allCountries, setAllCountries] = useState([]);
    // useEffect(() => {
    //     return async () => {
    //         const data = await getAllCountries();
    //         setAllCountries(data);
    //     };
    // }, []);
    return (
        <>
            <Navbar2 />
            <Router>
                <ScrollToTop>
                    <Routes>
                        {/* place all your routes and pages under here */}
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/country/:countryCode"
                            element={<CountryInfo />}
                        />
                    </Routes>
                </ScrollToTop>
            </Router>
        </>
    );
}

export default App;
