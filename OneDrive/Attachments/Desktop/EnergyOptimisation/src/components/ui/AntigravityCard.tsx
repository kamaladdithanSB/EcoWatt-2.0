import React from 'react';
import styles from './AntigravityCard.module.css';

interface AntigravityCardProps {
  children: React.ReactNode;
  floating?: boolean;
  glass?: boolean;
  interactive?: boolean;
  className?: string;
  hasGlow?: boolean;
  style?: React.CSSProperties;
}

export const AntigravityCard: React.FC<AntigravityCardProps> = ({
  children,
  floating = false,
  glass = false,
  interactive = false,
  className = '',
  hasGlow = false,
  style,
}) => {
  const classNames = [
    styles.card,
    floating ? styles.floating : '',
    glass ? styles.glass : '',
    interactive ? styles.interactive : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames} style={style}>
      {hasGlow && <div className={styles.glow} />}
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};
