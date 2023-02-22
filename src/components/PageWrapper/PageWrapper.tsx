import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Button } from '@mui/material';
import UserIcon from 'assets/User';

import styles from './PageWrapper.module.sass';
import { useAppDispatch } from 'redux/hooks';
import useGetNews from 'hooks/useGetNews';
import { setNews } from 'redux/app/appSlice';

const PageWrapper = ({ children }: { children: JSX.Element | JSX.Element }) => {
  const news = useGetNews();
  const dispatch = useAppDispatch();
  const [showHeader, setShowHeader] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const auth = false;

  useEffect(() => {
    if (news && news?.length > 0) {
      dispatch(setNews(news));
    }
  }, [news]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className={styles.wrapper}>
      <header
        className={`${styles.header} ${
          showHeader ? styles.headerShow : styles.headerHide
        }`}
      >
        <h3>
          <NavLink to="/">NewsPage</NavLink>
        </h3>
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
