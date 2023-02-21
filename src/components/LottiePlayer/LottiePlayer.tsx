import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

import { ILottiePlayer } from './LottiePlayer.types';

const LottiePlayer = ({ autoplay, loop, src, style }: ILottiePlayer) => {
  return (
    <Player
      autoplay={autoplay ?? true}
      loop={loop ?? true}
      src={src ?? 'https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json'}
      style={style ?? { height: '300px', width: '300px' }}
    />
  );
};

export default LottiePlayer;
