/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../res/theme/defaultTheme';
import LayoutNotLogin from '../../layout/LayoutNotLogin';

import {
  PATH_LOGIN,
  PATH_ROOT,
  PATH_HOMEPAGE,
  PATH_FORGET_PASSWORD,
} from '../../utils/constants';
import Login from '../Login/LoadableLogin';
import Homepage from '../HomePage/Loadable';
import ForgetPassword from '../ForgetPassword/Loadable';
import LayoutLogged from '../../layout/LayoutLogged';
import Garage from '../Garage/LoadableGarage';
import Road from '../Road/LoadableGarbageTruck';
import GarbageTruck from '../GarbageTruck/LoadableGarbageTruck';
import RecycleBin from '../RecycleBin/LoadableRecycleBin';
import Notification from '../Notification/LoadableNotifications';
import User from '../User/LoadableUser';
import Dashboard from '../DashBoard/LoadableDashBoard';
import Register from '../Register';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        <Switch>
          <LayoutNotLogin exact path={PATH_ROOT} component={Homepage} />
          <LayoutNotLogin exact path={PATH_LOGIN} component={Login} />
          <LayoutNotLogin exact path={PATH_HOMEPAGE} component={Homepage} />
          <LayoutNotLogin
            path={PATH_FORGET_PASSWORD}
            component={ForgetPassword}
          />
          <LayoutLogged
            exact
            path="/garage"
            component={Garage}
            showSearch
            placeholderSearch="Tìm kiếm"
          />
          <LayoutLogged
            exact
            path="/road"
            component={Road}
            showSearch
            placeholderSearch="Tìm kiếm"
          />
          <LayoutLogged
            exact
            path="/garbageTruck"
            component={GarbageTruck}
            showSearch
            placeholderSearch="Tìm kiếm"
          />
          <LayoutLogged
            exact
            path="/RecycleBin"
            component={RecycleBin}
            showSearch
            placeholderSearch="Tìm kiếm"
          />
          <LayoutLogged
            exact
            path="/notification"
            component={Notification}
            showSearch
            placeholderSearch="Tìm kiếm"
          />
          <LayoutLogged
            exact
            path="/user"
            component={User}
            showSearch
            placeholderSearch="Tìm kiếm"
          />
          <LayoutLogged
            exact
            path="/dashboard"
            component={Dashboard}
            // showSearch
            // placeholderSearch="Tìm kiếm"
          />
          <Route path="/register" render={() => <Register />} />
        </Switch>
      </>
    </ThemeProvider>
  );
}
