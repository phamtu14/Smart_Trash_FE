import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { COOKIES, PATH_ROOT } from '../../utils/constants';

const LayoutNotLogin = ({ path, component: Component }) => {
  const token = Cookies.get(COOKIES.accessTokenTest);
  return (
    <Route
      render={() =>
        !token ? (
          path === PATH_ROOT ? (
            <Redirect to="/homepage" />
          ) : (
            <div>
              <Component />
            </div>
          )
        ) : (
          <Redirect to={PATH_ROOT} />
        )
      }
    />
  );
};
LayoutNotLogin.propTypes = {
  path: PropTypes.string,
  component: PropTypes.func,
};

export default LayoutNotLogin;
