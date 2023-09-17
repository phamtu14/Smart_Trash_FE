import { createSelector } from 'reselect';
import { REDUX_KEY } from '../../utils/constants';
import { initialState } from './reducer';

export const selectNotification = state =>
  state[REDUX_KEY.notification] || initialState;

export const selectLoading = () =>
  createSelector(
    selectNotification,
    state => state.isLoading,
  );

export const selectListNotification = () =>
  createSelector(
    selectNotification,
    state => state.listNotification,
  );
