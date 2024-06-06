import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './HomeComponents/Home';
import Lego from './Options/Lego';
import LegoOption1 from './Options/LegoOption1';
import LegoOption2 from './Options/LegoOption2';
import Onemigration from './Options/Onemigration';
import OnemigrationOption1 from './Options/OnemigrationOption1';
import OnemigrationOption2 from './Options/OnemigrationOption2';
import MainSidebar from './MainSidebarComponents/MainSidebar';
import './index.css';

const App: React.FC = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`app ${sidebarOpen ? 'with-sidebar' : ''}`}>
      <button className="hamburger" onClick={toggleSidebar}>
        &#9776;
      </button>
      {sidebarOpen && <MainSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lego" element={<Lego />} />
        <Route path="/lego/option1" element={<LegoOption1 />} />
        <Route path="/lego/option2" element={<LegoOption2 />} />
        <Route path="/onemigration" element={<Onemigration />} />
        <Route path="/onemigration/option1" element={<OnemigrationOption1 />} />
        <Route path="/onemigration/option2" element={<OnemigrationOption2 />} />
      </Routes>
    </div>
  );
};

const AppWrapper: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
