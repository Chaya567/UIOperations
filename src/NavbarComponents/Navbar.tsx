import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      <h1>מוצרי SDI</h1>
      {/* <ul>
        <li className={location.pathname === '/lego' ? styles.active : ''}>
          <Link to="/lego">Lego</Link>
        </li>
        <li className={location.pathname === '/onemigration' ? styles.active : ''}>
          <Link to="/onemigration">Onemigration</Link>
        </li>
      </ul> */}
    </nav>
  );
}

export default Navbar;
