import React from 'react';
import styles from './SpendingByWeek.module.scss';

export type SpendingByWeekProps = {

};

export const SpendingByWeek: React.FC<SpendingByWeekProps> = () => (
  <div className={styles.container} data-testid="SpendingByWeek">
    SpendingByWeek Component
  </div>
);
