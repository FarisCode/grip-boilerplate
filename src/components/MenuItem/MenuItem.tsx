import React from "react";

export type MenuItemProps = {
  styleClass: string;
  icon: string;
  title: string;
  value?: string;
  valueStyleClass?: string;
  clickHandler: any;
};

export const MenuItem: React.FC<MenuItemProps> = ({
  styleClass,
  icon,
  title,
  value,
  valueStyleClass,
  clickHandler = () => {},
}) => (
  <div className={styleClass} onClick={clickHandler}>
    <img src={icon} alt="" />
    <div>
      {title}&nbsp;
      {value ? <span className={valueStyleClass}>{`(${value})`}</span> : ""}
    </div>
  </div>
);
