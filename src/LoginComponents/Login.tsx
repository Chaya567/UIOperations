// src/components/Login.tsx
import React from 'react';
import styles from './Login.module.css';

const Login: React.FC = () => {
  const handleLogin = () => {
    // כאן תתבצע הלוגיקה להתחברות עם ADFS
    console.log('Login with ADFS');
  };

  return (
    <div className={styles.loginContainer}>
      <h2>התחברות</h2>
      <button onClick={handleLogin}>התחבר עם ADFS</button>
    </div>
  );
};

export default Login;
