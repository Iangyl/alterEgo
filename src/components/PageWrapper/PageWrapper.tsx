import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { Button, Popover } from '@mui/material';
import UserIcon from 'assets/User';

import styles from './PageWrapper.module.sass';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import useGetNews from 'hooks/useGetNews';
import { setNews, setSession } from 'redux/app/appSlice';
import { useTranslation } from 'react-i18next';
import UnitedKingdomIcon from 'assets/UnitedKingdom';
import UkraineIcon from 'assets/Ukraine';

const PageWrapper = ({ children }: { children: JSX.Element | JSX.Element }) => {
  const news = useGetNews();
  const { t, i18n } = useTranslation();
  const session = useAppSelector((state) => state.session);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [lang, setLang] = useState(i18n.language);
  const [showHeader, setShowHeader] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleTranslation = () => {
    if (lang === 'en') {
      i18n.changeLanguage('ua-UA');
      setLang('ua');
    } else {
      i18n.changeLanguage('en-US');
      setLang('en');
    }
  };

  console.log(i18n.language);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    dispatch(setSession({ status: 'inactive', accessStatus: 'closed' }));
    navigate('/');
  };

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
              {t('Home')}
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.link} to="/news">
              {t('News')}
            </NavLink>
          </li>
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <button onClick={handleTranslation} className={styles.lang}>
            {lang === 'en' ? (
              <UnitedKingdomIcon width={24} height={24} />
            ) : (
              <UkraineIcon width={24} height={24} />
            )}
          </button>
          {session.accessStatus === 'open' ? (
            <button className={styles.user} onClick={handleClick}>
              <UserIcon width={24} height={24} />
              <div>admin</div>
            </button>
          ) : (
            <div className={styles.user}>
              <Button variant="outlined" onClick={() => navigate('/sign-in')}>
                {t('Log in')}
              </Button>
            </div>
          )}
        </div>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>&copy; 2023 NewsPage. All rights reserved.</p>
      </footer>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <button
          className={`${styles.popoverItem} ${styles.default}`}
          onClick={() => navigate('/profile')}
        >
          {t('Profile')}
        </button>
        <button
          className={`${styles.popoverItem} ${styles.dangerous}`}
          onClick={handleLogOut}
        >
          {t('Log out')}
        </button>
      </Popover>
    </div>
  );
};

export default PageWrapper;
