import React from 'react';
import styles from './NavigationSidebar.module.scss';
import cashIcon from "./cash-icon.png";
import creditCardIcon from "./credit-card-icon.png";
import dashboardIcon from "./dashboard-icon.png";
import minimizeIcon from "./minimize-icon.png";
import settingsIcon from "./settings-icon.png";
import transactionsIcon from "./transactions-icon.png";

export type NavigationSidebarProps = {

};

export const NavigationSidebar: React.FC<NavigationSidebarProps> = () => (
  <div className={styles.container} data-testid="NavigationSidebar">
      <div>NavigationSidebar</div>
      <img src={cashIcon} />
      <img src={creditCardIcon} />
      <img src={dashboardIcon} />
      <img src={minimizeIcon} />
      <img src={settingsIcon} />
      <img src={transactionsIcon} />

  </div>
);
