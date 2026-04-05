import React from 'react';
import styles from './KineticButton.module.css';

interface KineticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const KineticButton: React.FC<KineticButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const classNames = [
    styles.button,
    variant === 'primary' ? styles.primary : styles.secondary,
    className,
  ].filter(Boolean).join(' ');

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
};
