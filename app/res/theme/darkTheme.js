import { defaultTheme } from './defaultTheme';
import { buttonDarkStyle } from '../styles/buttonStyle';

export const darkTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    background: 'black',
  },
  buttonStyle: buttonDarkStyle,
};
