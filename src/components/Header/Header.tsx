import React from 'react';
import styles from './Header.module.scss';

export type HeaderProps = {

};

export const Header: React.FC<HeaderProps> = () => (
  <div className={styles.container} data-testid="Header">
    Header Component
  </div>
);
