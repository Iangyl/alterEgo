export interface ILottiePlayer {
  autoplay?: boolean;
  loop?: boolean;
  src: string;
  style?: Record<string, string | number>;
}
