import React from 'react';
import styles from './SpendingAverage.module.scss';

export type SpendingAverageProps = {

};

export const SpendingAverage: React.FC<SpendingAverageProps> = () => (
  <div className={styles.container} data-testid="SpendingAverage">
    SpendingAverage Component
  </div>
);
