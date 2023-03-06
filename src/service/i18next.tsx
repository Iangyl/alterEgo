import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        Home: 'Home',
        Profile: 'Profile',
        News: 'News',
        Delete: 'Delete',
        'Log in': 'Log in',
        'Sign in': 'Sign in',
        'Log out': 'Log out',
        Username: 'Username',
        Password: 'Password',
        Submit: 'Submit',
        'Upload more': 'Upload more',
        'Username is incorrect!': 'Username is incorrect!',
        'Password is incorrect!': 'Username is incorrect!',
      },
    },
    ua: {
      translation: {
        Home: 'Головна',
        Profile: 'Профіль',
        News: 'Новини',
        Delete: 'Видалити',
        'Log in': 'Увійти',
        'Sign in': 'Увійти',
        'Log out': 'Вийти',
        Username: 'Нікнейм',
        Password: 'Пароль',
        Submit: 'Прийняти',
        'Upload more': 'Завантажити ще',
        'Username is incorrect!': 'Нікнейм не правильний!',
        'Password is incorrect!': 'Пароль не правильний!',
      },
    },
  },
  lng: 'en', // if you're using a language detector, do not define the lng option
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
});
