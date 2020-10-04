import React from 'react';
import styles from './SpendingByCategory.module.scss';

export type SpendingByCategoryProps = {

};

export const SpendingByCategory: React.FC<SpendingByCategoryProps> = () => (
  <div className={styles.container} data-testid="SpendingByCategory">
    SpendingByCategory Component
  </div>
);
