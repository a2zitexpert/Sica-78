import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import SeniorSecondary from "./pages/SeniorSecondary";
import PrimarySection from "./pages/PrimarySection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Homeheader from "./components/Homeheader";
import Homefooter from "./components/Homefooter";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AppContent() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? <Homeheader /> : <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sica-senior-secondary" element={<SeniorSecondary />} />
        <Route path="/primary-section-sica" element={<PrimarySection />} />
      </Routes>

      {location.pathname === "/" ? <Homefooter /> : <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
