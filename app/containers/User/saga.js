import { call, put, takeLatest } from 'redux-saga/effects';
import * as constants from './constant';
import * as actions from './actions';
import { axiosGet, axiosPost } from '../../utils/request';

export function* getListUser() {
  const path = '/api/v1/User';
  try {
    const res = yield call(axiosGet, path);
    if (res.data) {
      console.log(res.data);
      yield put(actions.getListUserSuccess(res.data));
    } else {
      yield put(actions.requestFalse());
    }
  } catch (error) {
    yield put(actions.requestFalse());
  }
}

export function* addUser(action) {
  const path = '/api/v1/User';
  try {
    const res = yield call(axiosPost, path, action.body);
    if (res.data) {
      yield put(actions.addUserSuccess(res.data));
    } else {
      yield put(actions.requestFalse());
    }
  } catch (error) {
    yield put(actions.requestFalse());
  }
}

export default function* watchFetchMonitor() {
  yield takeLatest(constants.GET_LIST_USER, getListUser);
  yield takeLatest(constants.ADD_USER, addUser);
}
