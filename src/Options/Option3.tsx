import React from 'react';
import styles from './Option.module.css';

const Option3: React.FC = () => {
  return (
    <div className={styles.optionContainer}>
      <h2 className={styles.optionTitle}>Option 3</h2>
      <p className={styles.optionContent}>This is the detail page for Option 3.</p>
    </div>
  );
};

export default Option3;
