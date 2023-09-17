import { createSelector } from 'reselect';
import { REDUX_KEY } from '../../utils/constants';
import { initialState } from './reducer';

export const selectGarage = state => state[REDUX_KEY.garage] || initialState;

export const selectLoading = () =>
  createSelector(
    selectGarage,
    state => state.isLoading,
  );

export const selectListGarage = () =>
  createSelector(
    selectGarage,
    state => state.listGarage,
  );
