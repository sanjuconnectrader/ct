
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Contactpage from './pages/Contactpage';
import Aboutpage from './pages/Aboutpage';








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
        <Route path='/contact' element={<Contactpage/>} />
             <Route path='/about' element={<Aboutpage/>} />
       


      </Routes>
    </>
  );
};

export default App;
