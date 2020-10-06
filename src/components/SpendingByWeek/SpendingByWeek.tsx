import React from "react";
import styles from "./SpendingByWeek.module.scss";

export type SpendingByWeekProps = {
  data: Array<number>;
};

const weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

export const SpendingByWeek: React.FC<SpendingByWeekProps> = ({
  data = [250, 300, 100, 200, 105, 450, 250],
}) => {
  let max = Math.max(...data);
  let displayData: Array<any> = [];
  if (max !== 0) {
    max = max * 1.25;
    displayData = weekDays.map((d, i) => ({
      val: data[i] || 0,
      relSize: Math.round(((data[i] || 0) / max) * 100),
      day: d,
    }));
  } else {
    displayData = weekDays.map((d) => ({ day: d }));
  }

  return (
    <div className={styles.container} data-testid="SpendingByWeek">
      <div className={styles.label}>Spending by Week</div>
      <div className={styles.chart}>
        {displayData.map(({ val, relSize, day }, i) => {
          return (
            <div className={styles.bar} >
              {val > 0 ? <div className={styles.value}>${val}</div> : ""}
              <div className={styles.fill} style={{ height: `${relSize}%` }}></div>
              <div className={styles.label}>{day}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
