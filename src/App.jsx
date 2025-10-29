
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Contactpage from './pages/Contactpage';
import Aboutpage from './pages/Aboutpage';
import Casestudypage from './pages/Casestudypage';
import Moyerpage from './pages/Projectpage/Moyerpage';
import Uipage from './pages/Servicepages/Uipage';
import Webpage from './pages/Servicepages/Webpage';
import Mobilepage from './pages/Servicepages/Mobilepage';
import Wireframepage from './pages/Servicepages/Wireframepage';
import Webdevpage from './pages/Servicepages/Webdevpage';
import Primepage from './pages/Projectpage/Primepage';









const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <>

      <ScrollToTop />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/contact' element={<Contactpage />} />
        <Route path='/about' element={<Aboutpage />} />
        <Route path='/works' element={<Casestudypage />} />


        <Route path='/works/Moyer-production' element={<Moyerpage />} />
            <Route path='/works/Primedlandscaping' element={<Primepage/>} />


        <Route path='/service/website-design' element={<Webpage />} />





        <Route path='/service/ui-ux' element={<Uipage />} />

        <Route path='/service/MobileAppDevelopment' element={<Mobilepage />} />

        <Route path='/service/WireFraming' element={<Wireframepage />} />
        <Route path='/service/Webdevelopment' element={<Webdevpage />} />

        






      </Routes>
    </>
  );
};

export default App;
