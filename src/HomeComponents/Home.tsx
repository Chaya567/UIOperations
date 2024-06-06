import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <nav className={styles.navbar}>
        {/* <ul>
          <li><Link to="/lego">Lego</Link></li>
          <li><Link to="/onemigration">Onemigration</Link></li>
        </ul> */}
      </nav>
      <div className={styles.content}>
        <h1>ברוכים הבאים למערכות SDI</h1>
      </div>
    </div>
  );
}

export default Home;
