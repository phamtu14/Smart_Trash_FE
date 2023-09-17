import PropTypes from 'prop-types';
import React from 'react';
import { InputText } from './style';

const InputSearch = React.forwardRef((props, ref) => (
  <InputText {...props} ref={ref} style={{ borderRadius: '12px' }}>
    {props.children}
  </InputText>
));

InputSearch.propTypes = {
  children: PropTypes.any,
};

export default InputSearch;
