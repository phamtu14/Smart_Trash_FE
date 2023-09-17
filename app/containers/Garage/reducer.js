import produce from 'immer';
import { GET_LIST_GARAGE_SUCCESS, RESET_REDUX } from './constant';

export const initialState = {
  isLoading: false,
  listGarage: [],
};
/* eslint-disable default-case, no-param-reassign */
const gabageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case RESET_REDUX:
        draft.isLoading = false;
        draft.listGarage = [];
        break;
      case GET_LIST_GARAGE_SUCCESS:
        draft.isLoading = false;
        draft.listGarage = action.data;
    }
  });

export default gabageReducer;
