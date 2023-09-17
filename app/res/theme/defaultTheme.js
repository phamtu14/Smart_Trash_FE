import { inputDefaultStyle } from '../styles/inputStyle';
import { selectDefaultStyle } from '../styles/selectStyle';
import { buttonDefaultStyle } from '../styles/buttonStyle';

export const defaultTheme = {
  primaryColor: '#219653',
  colors: {
    background: 'white',
    colorText: '#222d4b',
    colorLink: '#1574F6',
    white: '#ffffff',
    gray: '#a8b1bd',
    placeholder: '#727272',
    red: '#E50500',
    inputPlaceholder: '#8a929a',
    backgroundAdvanceSearch: '#EEFBFF',
    backgroundTagInput: '#CDFFE2',
    scrollbarColor: '#c5ced9',
    disableColor: '#C5CED9',
    modal: {
      borderColor: '#b0bec5',
      background: '#d3f7ff',
    },
    status: {
      active: '#00C968',
      inActive: '#E50500',
      newCreate: '#323232',
      draft: '#323232',
      waitSign: '#F89D18',
      waitApprove: '#F57C00',
      deleted: '#E30D16',
      complete: '#00C968',
      refuseSign: '#FF928E',
      refuseApprove: '#E30D16',
    },
    table: {
      whiteGreen: '#CDFFE2',
      blueGreen: '#D3F7FF',
    },
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '0.875rem',
    medium: '1rem',
    large: '1.125rem',
    extraLarge: '1.25rem',
  },
  inputStyle: inputDefaultStyle,
  selectStyle: selectDefaultStyle,
  buttonStyle: buttonDefaultStyle,
};
