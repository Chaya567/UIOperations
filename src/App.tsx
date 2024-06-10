import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import axios from 'axios';
import Home from './HomeComponents/Home';
import MainSidebar from './MainSidebarComponents/MainSidebar';
import SystemCard from './SystemComponents/SystemCard';
import './App.css';

const App: React.FC = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [systems, setSystems] = useState<any[]>([]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const fetchSystems = async () => {
      const response = await axios.get('/systems.json');
      setSystems(response.data);
    };

    fetchSystems();
  }, []);

  return (
    <div className={`app ${sidebarOpen ? 'with-sidebar' : ''}`}>
      <button className="hamburger" onClick={toggleSidebar}>
        &#9776;
      </button>
      {sidebarOpen && <MainSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />}
      <Routes>
        <Route path="/" element={<Home />} />
        {systems.map((system) => (
          <Route key={system.systemName} path={`/${system.systemName.toLowerCase()}`} element={<SystemCard system={system} />} />
        ))}
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
