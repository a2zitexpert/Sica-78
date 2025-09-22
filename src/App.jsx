import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SeniorSecondary from "./pages/SeniorSecondary";
import PrimarySection from "./pages/PrimarySection";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sica-senior-secondary" element={<SeniorSecondary />} />
        <Route path="/primary-section-sica" element={<PrimarySection />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
