import React, { useState } from "react";
import styles from "./NavigationSidebar.module.scss";
import cashIcon from "./cash-icon.svg";
import dollarIcon from "./dollar-icon.svg";
import creditCardIcon from "./credit-card-icon.svg";
import dashboardIcon from "./dashboard-icon.svg";
import collapseIcon from "./collapse-icon.svg";
import expandIcon from "./expand-icon.svg";
import settingsIcon from "./settings-icon.svg";
import logoutIcon from "./logout-icon.svg";
import transactionsIcon from "./transactions-icon.svg";
import { MenuItem } from "../MenuItem/MenuItem";

const menu1 = [
  {
    icon: dashboardIcon,
    title: "Dashboard",
    clickHandler: () => console.log("Dashboard Clicked"),
  },
  {
    icon: transactionsIcon,
    clickHandler: () => console.log("Transactions Clicked"),
    title: "Transactions",
  },
];

const menu2 = [
  {
    icon: dollarIcon,
    title: "Capital One",
    value: "$2392",
    clickHandler: () => console.log("Capital One Clicked"),
    valueStyleClass: "red",
  },
  {
    icon: creditCardIcon,
    title: "Credit Cards",
    value: "$292",
    valueStyleClass: "green",
    clickHandler: () => console.log("Credit Cards Clicked"),
  },
];

const menu3 = [
  {
    icon: settingsIcon,
    title: "Settings",
    clickHandler: () => console.log("Settings Clicked"),
  },
  {
    icon: logoutIcon,
    title: "Sign out",
    clickHandler: () => console.log("Sign out Clicked"),
  },
];

export type NavigationSidebarProps = {};

export const NavigationSidebar: React.FC<NavigationSidebarProps> = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`${styles.container} ${collapsed ? styles.collapsed : ""}`}
      data-testid="NavigationSidebar"
    >
      <div className={styles.logo}>
        <div>Grip</div> <span></span>
      </div>
      <div className={styles.sidebarContent}>
        <div className={styles.mainMenu}>
          <span className={styles.label + " " + styles.larger}>Main Menu</span>

          {menu1.map((m, i) => (
            <MenuItem
              key={i}
              styleClass={styles.menuItem}
              icon={m.icon}
              title={m.title}
              clickHandler={m.clickHandler}
            />
          ))}

          <span className={styles.label}>Credit cards</span>

          {menu2.map((m, i) => (
            <MenuItem
              styleClass={styles.menuItem}
              key={i}
              icon={m.icon}
              title={m.title}
              clickHandler={m.clickHandler}
              value={m.value}
              valueStyleClass={
                m.valueStyleClass === "red" ? styles.red : styles.green
              }
            />
          ))}

          <span className={styles.label}>Bank Accounts</span>

          <MenuItem
            styleClass={styles.menuItem}
            icon={cashIcon}
            title="Chase"
            value="$120"
            clickHandler={() => {
              console.log("Chase Clicked!");
            }}
            valueStyleClass={styles.green}
          />
        </div>

        <div className={styles.secMenu}>
          <div className={styles.options}>
            {menu3.map((m, i) => (
              <MenuItem
                styleClass={styles.menuItem}
                key={i}
                icon={m.icon}
                clickHandler={m.clickHandler}
                title={m.title}
              />
            ))}
          </div>

          <div
            className={styles.collapseBtn}
            onClick={() => setCollapsed((val) => !val)}
          >
            <img src={collapsed ? expandIcon : collapseIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
