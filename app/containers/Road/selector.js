import { createSelector } from 'reselect';
import { REDUX_KEY } from '../../utils/constants';
import { initialState } from './reducer';

export const selectGarageTruck = state =>
  state[REDUX_KEY.garbageTruck] || initialState;

export const selectLoading = () =>
  createSelector(
    selectGarageTruck,
    state => state.isLoading,
  );

export const selectListGarageTruck = () =>
  createSelector(
    selectGarageTruck,
    state => state.listGarbageTruck,
  );
