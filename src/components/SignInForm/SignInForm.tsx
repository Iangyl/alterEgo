import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'redux/hooks';
import { setSession } from 'redux/app/appSlice';
import { useTranslation } from 'react-i18next';

import styles from './SignInForm.module.sass';

const correctPassword = '12345';
const correctUsername = 'admin';

const SignInForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [validation, setValidation] = useState({
    password: 'default',
    username: 'default',
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = event.target;

    if (target.name === 'username') {
      setUsername(target.value);
    } else if (target.name === 'password') {
      setPassword(target.value);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if (correctPassword === password && correctUsername === username) {
      navigate('/profile');
      dispatch(setSession({ status: 'active', accessStatus: 'open' }));
    } else if (correctPassword !== password && correctUsername !== username) {
      setValidation({ password: 'incorrect', username: 'incorrect' });
    } else if (correctPassword !== password) {
      setValidation((prev) => {
        return { password: 'incorrect', username: prev.username };
      });
    } else if (correctUsername !== username) {
      setValidation((prev) => {
        return { password: prev.password, username: 'incorrect' };
      });
    }
  };

  return (
    <Box>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>{t('Sign in')}</h2>
        <TextField
          value={username}
          type="username"
          name="username"
          className={styles.username}
          label={t('Username')}
          onChange={handleChange}
          onFocus={() =>
            setValidation((prev) => {
              return { password: prev.password, username: 'default' };
            })
          }
        />
        <p
          className={`${styles.warning} ${
            validation.username === 'incorrect'
              ? styles['warning-active']
              : styles['warning-inactive']
          }`}
        >
          {t('Username is incorrect!')}
        </p>
        <TextField
          value={password}
          type="password"
          name="password"
          className={styles.password}
          label={t('Password')}
          onChange={handleChange}
          onFocus={() =>
            setValidation((prev) => {
              return { password: 'default', username: prev.username };
            })
          }
        />
        <p
          className={`${styles.warning} ${
            validation.password === 'incorrect'
              ? styles['warning-active']
              : styles['warning-inactive']
          }`}
        >
          {t('Password is incorrect!')}
        </p>
        <Button className={styles.submit} type="submit" variant="contained">
          {t('Submit')}
        </Button>
      </form>
    </Box>
  );
};

export default SignInForm;
