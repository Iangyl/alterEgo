import React from 'react';
import { NavLink } from 'react-router-dom';

import { Button } from '@mui/material';
import UserIcon from 'assets/User';

import styles from './PageWrapper.module.sass';

const PageWrapper = ({ children }: { children: JSX.Element | JSX.Element }) => {
  const auth = false;
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h3>NewsPage</h3>
        <ul>
          <li>
            <NavLink className={styles.link} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.link} to="/news">
              News
            </NavLink>
          </li>
        </ul>
        {auth ? (
          <div className={styles.user}>
            <UserIcon width={24} height={24} />
            <div>admin</div>
          </div>
        ) : (
          <div className={styles.user}>
            <Button variant="outlined">Log In</Button>
          </div>
        )}
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>&copy; 2023 NewsPage. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PageWrapper;
