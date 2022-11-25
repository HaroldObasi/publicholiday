import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CountryInfo from "./pages/CountryInfo";

function App() {
    return (
        <>
            <Navbar />
            <Router>
                <ScrollToTop>
                    <Routes>
                        {/* place all your routes and pages under here */}
                        <Route path="/" element={<Home />} />
                        <Route path="/country" element={<CountryInfo />} />
                    </Routes>
                </ScrollToTop>
            </Router>
        </>
    );
}

export default App;
