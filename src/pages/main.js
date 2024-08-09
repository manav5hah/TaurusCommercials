import { 
    BrowserRouter as Router,
    Routes,
    Route
   } from "react-router-dom";
  import HRSheets from "./HRSheets/HRSheets";
  import CRSheets from "./CRSheets/CRSheets";
  import ContactUs from "./ContactUs/ContactUs";
  import AboutUs from "./AboutUs/AboutUs";
  import Enquiry from "./Enquiry/Enquiry";
  import AppBar from "./AppBar/AppBar";
  import Home from "./Home/Home";
  
  function Main() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
          <AppBar />
        <Routes>
          <Route excat path='/' element={<Home />} ></Route>
          <Route path='/about-us' element={<AboutUs />} ></Route>
          <Route path='/contact-us' element={<ContactUs />} ></Route>
          <Route path='/enquiry' element={<Enquiry />}></Route>
          <Route path='/cr-sheets' element={<CRSheets />}></Route>
          <Route path='/hr-sheets' element={<HRSheets />}></Route>
        </Routes>
        </Router>
    );
  
  }
  export default Main; 