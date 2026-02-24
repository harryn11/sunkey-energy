import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer, NoiseOverlay } from './components/Layout';
import Home from './pages/Home';
import Solar from './pages/Solar';
import Battery from './pages/Battery';
import EV from './pages/EV';
import HRS from './pages/HRS';

// Scroll to top on route change component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <div className="bg-background min-h-screen font-sans selection:bg-primary selection:text-white">
        <NoiseOverlay />
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/solar" element={<Solar />} />
          <Route path="/services/battery" element={<Battery />} />
          <Route path="/services/ev" element={<EV />} />
          <Route path="/services/hrs" element={<HRS />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
