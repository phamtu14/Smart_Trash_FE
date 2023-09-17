import produce from 'immer';
import { GET_LIST_USER_SUCCESS, RESET_REDUX } from './constant';

export const initialState = {
  isLoading: false,
  listUser: [],
};
/* eslint-disable default-case, no-param-reassign */
const recycleBinReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case RESET_REDUX:
        draft.isLoading = false;
        draft.listUser = [];
        break;
      case GET_LIST_USER_SUCCESS:
        draft.isLoading = false;
        draft.listUser = action.data;
    }
  });

export default recycleBinReducer;
