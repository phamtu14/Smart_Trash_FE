import React from 'react';

import loadingIcon from '../../../images/loading.svg';
import Wrapper from './Wrapper';

const LoadingIndicator = () => (
  <Wrapper>
    <img width="100px" height="100px" alt="" src={loadingIcon} />
  </Wrapper>
);

export default LoadingIndicator;
