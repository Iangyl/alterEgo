import React from 'react';

import NewsBlock from 'components/NewsBlock/NewsBlock';
import styles from './HomeSection.module.sass';

const HomeSection = () => {
  return (
    <section className={styles.section}>
      <NewsBlock type="main" />
      <div>
        <NewsBlock type="regular" />
        <NewsBlock type="regular" />
        <NewsBlock type="regular" />
        <NewsBlock type="regular" />
      </div>
    </section>
  );
};

export default HomeSection;
