import React from 'react';

import LottiePlayer from 'components/LottiePlayer/LottiePlayer';
import { loaderHref } from 'utils/constants';

import styles from './Loader.module.sass';

const Loader = () => (
  <div className={styles.loaderContainer}>
    <LottiePlayer src={loaderHref} />
  </div>
);

const AppLoader = React.memo(Loader);
export default AppLoader;
