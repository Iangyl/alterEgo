import React from 'react';
import { Button } from '@mui/material';

import styles from './NewsList.module.sass';

const NewsList = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <section className={styles.newsList}>
      <h1>News</h1>
      <div className={styles.list}>
        {children}
        <div>
          <Button variant="contained">Upload more</Button>
        </div>
      </div>
    </section>
  );
};

export default NewsList;
