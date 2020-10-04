import React from 'react';
import styles from './Box.module.scss';

export type BoxProps = {

};

export const Box: React.FC<BoxProps> = () => (
  <div className={styles.container} data-testid="Box">
    Box Component
  </div>
);
