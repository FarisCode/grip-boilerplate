import React from 'react';
import styles from './TemplateName.module.scss';

export type TemplateNameProps = {

};

export const TemplateName: React.FC<TemplateNameProps> = () => (
  <div className={styles.container} data-testid="TemplateName">
    TemplateName Component
  </div>
);
