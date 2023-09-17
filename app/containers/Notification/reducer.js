import produce from 'immer';
import { GET_LIST_NOTIFICATION_SUCCESS, RESET_REDUX } from './constants';

export const initialState = {
  isLoading: false,
  listNotification: [],
};
/* eslint-disable default-case, no-param-reassign */
const notificationReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case RESET_REDUX:
        draft.isLoading = false;
        draft.listNotification = [];
        break;
      case GET_LIST_NOTIFICATION_SUCCESS:
        draft.isLoading = false;
        draft.listNotification = action.data;
    }
  });

export default notificationReducer;
