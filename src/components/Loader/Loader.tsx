import React from 'react';

import LottiePlayer from 'components/LottiePlayer/LottiePlayer';
import { loaderHref } from 'utils/constants';

const Loader = () => <LottiePlayer src={loaderHref} />;

const AppLoader = React.memo(Loader);
export default AppLoader;
