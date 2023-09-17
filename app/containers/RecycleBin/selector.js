import { createSelector } from 'reselect';
import { REDUX_KEY } from '../../utils/constants';
import { initialState } from './reducer';

export const selectRecycleBin = state =>
  state[REDUX_KEY.recycleBin] || initialState;

export const selectLoading = () =>
  createSelector(
    selectRecycleBin,
    state => state.isLoading,
  );

export const selectListRecycleBin = () =>
  createSelector(
    selectRecycleBin,
    state => state.listrecycleBin,
  );
