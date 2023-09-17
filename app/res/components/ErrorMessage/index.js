import React from 'react';
import PropTypes from 'prop-types';
import { ErrorDiv } from './style';

const ErrorMessage = ({ Message }) => <ErrorDiv>{Message}</ErrorDiv>;

ErrorMessage.propTypes = {
  Message: PropTypes.string,
};

export default ErrorMessage;
