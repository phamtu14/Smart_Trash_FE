import React from 'react';
import loadable from 'utils/loadable';
import LoadingIndicator from '../../res/components/LoadingIndicator';

export default loadable(() => import('./index'), {
  fallback: <LoadingIndicator />,
});
