import React from 'react';
import styles from './NavigationSidebar.module.scss';

export type NavigationSidebarProps = {

};

export const NavigationSidebar: React.FC<NavigationSidebarProps> = () => (
  <div className={styles.container} data-testid="NavigationSidebar">
      <div></div>
  </div>
);
