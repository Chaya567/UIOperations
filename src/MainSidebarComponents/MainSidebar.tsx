import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './MainSidebar.module.css';

interface MainSidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const MainSidebar: React.FC<MainSidebarProps> = ({ isOpen, toggleSidebar }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const location = useLocation();

  const handleMenuClick = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const handleLinkClick = () => {
    toggleSidebar();
  };

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link to="/" onClick={handleLinkClick}>בית</Link>
        </li>
        <li className={`${styles.menuItem} ${location.pathname.startsWith('/lego') ? styles.active : ''}`}>
          <span onClick={() => handleMenuClick('lego')}>
            Lego
          </span>
          {activeMenu === 'lego' && (
            <ul className={styles.submenu}>
              <li className={styles.submenuItem}><Link to="/lego/option1" onClick={handleLinkClick}>Lego Option 1</Link></li>
              <li className={styles.submenuItem}><Link to="/lego/option2" onClick={handleLinkClick}>Lego Option 2</Link></li>
            </ul>
          )}
        </li>
        <li className={`${styles.menuItem} ${location.pathname.startsWith('/onemigration') ? styles.active : ''}`}>
          <span onClick={() => handleMenuClick('onemigration')}>
            Onemigration
          </span>
          {activeMenu === 'onemigration' && (
            <ul className={styles.submenu}>
              <li className={styles.submenuItem}><Link to="/onemigration/option1" onClick={handleLinkClick}>Onemigration Option 1</Link></li>
              <li className={styles.submenuItem}><Link to="/onemigration/option2" onClick={handleLinkClick}>Onemigration Option 2</Link></li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default MainSidebar;
