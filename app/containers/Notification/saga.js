import { call, put, takeLatest } from 'redux-saga/effects';
import * as constants from './constants';
import * as actions from './actions';
import { axiosGet, axiosPost } from '../../utils/request';

export function* getListNotification() {
  const path = '/api/v1/Notification/notifyTruck';
  try {
    const res = yield call(axiosGet, path);
    if (res.data) {
      yield put(actions.getListNotificationSuccess(res.data));
    } else {
      yield put(actions.requestFalse());
    }
  } catch (error) {
    yield put(actions.requestFalse());
  }
}

export function* addNotification(action) {
  const path = '/api/v1/Notification';
  try {
    const res = yield call(axiosPost, path, action.body);
    if (res.data) {
      yield put(actions.addNotificationSuccess(res.data));
    } else {
      yield put(actions.requestFalse());
    }
  } catch (error) {
    yield put(actions.requestFalse());
  }
}

export default function* watchFetchMonitor() {
  yield takeLatest(constants.GET_LIST_NOTIFICATION, getListNotification);
  yield takeLatest(constants.ADD_NOTIFICATION, addNotification);
}
