import React from 'react';
import styles from './EnergyMonolith.module.css';

interface EnergyMonolithProps {
  children: React.ReactNode;
  className?: string;
}

export const EnergyMonolith: React.FC<EnergyMonolithProps> = ({ children, className = '' }) => {
  return (
    <div className={`${styles.monolith} ${className}`}>
      <div className={styles.energyLine} />
      {children}
    </div>
  );
};
