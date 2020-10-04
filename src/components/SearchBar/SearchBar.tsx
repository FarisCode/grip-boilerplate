import React from 'react';
import styles from './SearchBar.module.scss';

export type SearchBarProps = {

};

export const SearchBar: React.FC<SearchBarProps> = () => (
  <div className={styles.container} data-testid="SearchBar">
    SearchBar Component
  </div>
);
