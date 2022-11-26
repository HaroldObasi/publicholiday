import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import CountryInfo from "./pages/CountryInfo";
import Admin from "./pages/Admin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <ScrollToTop>
                <Routes>
                    {/* place all your routes and pages under here */}
                    <Route path="/" element={<Home />} />
                    <Route path="/country" element={<CountryInfo />} />
                    <Route path="/admin" element={<Admin />} />
                </Routes>
            </ScrollToTop>
        </Router>
    );
}

export default App;
