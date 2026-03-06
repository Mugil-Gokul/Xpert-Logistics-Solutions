import './App.css'
import { Routes, Route } from "react-router-dom"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Contact from './Contact/Contact'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Home from './Home/Home'
import Career from './Career/Career'
import AboutUs from './AboutUs/AboutUs'
import Services from './Services/Services'

import FTL from './Services/SubPage/FTL'
import LTL from './Services/SubPage/LTL'
import ExpeditedShipping from './Services/SubPage/ExpeditedShipping'
import DedicatedFleetServices from './Services/SubPage/DedicatedFleetServices'
import BrokerageAnd3PL from './Services/SubPage/BrokerageAnd3PL'

function App() {
const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [pathname]);


  return (
    <>
      <Navbar/>

      <Routes>

        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />

        {/* Sub Services */}
        <Route path="/services/ftl" element={<FTL />} />
        <Route path="/services/ltl" element={<LTL />} />
        <Route path="/services/expedited-shipping" element={<ExpeditedShipping />} />
        <Route path="/services/dedicated-fleet" element={<DedicatedFleetServices />} />
        <Route path="/services/brokerage-3pl" element={<BrokerageAnd3PL />} />

      </Routes>

      <Footer/>
    </>
  )
}

export default App