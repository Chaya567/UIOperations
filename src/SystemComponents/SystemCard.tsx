import React from 'react';
import ActionCard from './ActionCard';
import styles from './SystemCard.module.css';

interface SystemProps {
  system: {
    systemName: string;
    systemDescription: string;
    imageUrl: string;
    documentationUrl: string;
    actions: any[];
  };
}

const SystemCard: React.FC<SystemProps> = ({ system }) => {
  return (
    <div className={styles.systemCard}>
      <img src={system.imageUrl} alt={system.systemName} />
      <h2>{system.systemName}</h2>
      <p>{system.systemDescription}</p>
      <a href={system.documentationUrl} target="_blank" rel="noopener noreferrer">Documentation</a>
      <div className={styles.actionsContainer}>
        {system.actions.map(action => (
          <ActionCard key={action.actionName} action={action} />
        ))}
      </div>
    </div>
  );
};

export default SystemCard;
