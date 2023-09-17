import produce from 'immer';
import { GET_LIST_RECYCLEBIN_SUCCESS, RESET_REDUX } from './constant';

export const initialState = {
  isLoading: false,
  listrecycleBin: [],
};
/* eslint-disable default-case, no-param-reassign */
const recycleBinReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case RESET_REDUX:
        draft.isLoading = false;
        draft.listrecycleBin = [];
        break;
      case GET_LIST_RECYCLEBIN_SUCCESS:
        draft.isLoading = false;
        draft.listrecycleBin = action.data;
    }
  });

export default recycleBinReducer;
