import { createSelector } from 'reselect';
import { REDUX_KEY } from '../../utils/constants';
import { initialState } from './reducer';

export const selectRecycleBin = state => state[REDUX_KEY.User] || initialState;

export const selectLoading = () =>
  createSelector(
    selectRecycleBin,
    state => state.isLoading,
  );

export const selectListUser = () =>
  createSelector(
    selectRecycleBin,
    state => state.listUser,
  );
