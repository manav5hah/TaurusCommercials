import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HRSheets from "./hr-sheets/hr-sheets";
import CRSheets from "./cr-sheets/cr_sheets";
import ContactUs from "./contact-us/contact-us";
import AboutUs from "./about-us/about-us";
import Enquiry from "./enquiry/enquiry";
import AppBar from "./app-bar/app-bar";
import Home from "./Home/Home";

function Main() {
  return (
    <Router basename="/">
      <AppBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/enquiry' element={<Enquiry />} />
        <Route path='/cr-sheets' element={<CRSheets />} />
        <Route path='/hr-sheets' element={<HRSheets />} />
      </Routes>
    </Router>
  );
}
export default Main;
