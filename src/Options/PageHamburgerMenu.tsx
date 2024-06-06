import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PageHamburgerMenu.module.css';

interface PageHamburgerMenuProps {
  links: { path: string, label: string }[];
}

const PageHamburgerMenu: React.FC<PageHamburgerMenuProps> = ({ links }) => {
  return (
    <div className={styles.hamburgerMenu}>
      <ul>
        {links.map(link => (
          <li key={link.path}>
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PageHamburgerMenu;
