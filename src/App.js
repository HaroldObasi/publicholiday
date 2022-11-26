import "./App.css";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Navbar2 from "./components/Navbar2";
import CountryInfo from "./pages/CountryInfo";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    // const [allCountries, setAllCountries] = useState([]);
    // useEffect(() => {
    //     return async () => {
    //         const data = await getAllCountries();
    //         setAllCountries(data);
    //     };
    // }, []);
    const location = 'Nigeria'
    return (
        <>
            <Navbar2 location={location} />
            <Router>
                <ScrollToTop>
                    <Routes>
                        {/* place all your routes and pages under here */}
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/country/:countryCode"
                            element={<CountryInfo />}
                        />
                        <Route path="/admin" element={<Admin />} />
                    </Routes>
                </ScrollToTop>
            </Router>
        </>
    );
}

export default App;