import { call, put, takeLatest } from 'redux-saga/effects';
import * as constants from './constants';
import * as actions from './actions';
import { axiosGet, axiosPost } from '../../utils/request';

export function* getListGarbageTruck() {
  const path = '/api/v1/Garbagetruck';
  try {
    const res = yield call(axiosGet, path);
    if (res.data) {
      yield put(actions.getListGarbageTruckSuccess(res.data));
    } else {
      yield put(actions.requestFalse());
    }
  } catch (error) {
    yield put(actions.requestFalse());
  }
}

export function* addGarageTruck(action) {
  const path = '/api/v1/Garbagetruck';
  try {
    const res = yield call(axiosPost, path, action.body);
    if (res.data) {
      yield put(actions.addGarbageTruck(res.data));
    } else {
      yield put(actions.requestFalse());
    }
  } catch (error) {
    yield put(actions.requestFalse());
  }
}

export default function* watchFetchMonitor() {
  yield takeLatest(constants.GET_LIST_GARBAGETRUCK, getListGarbageTruck);
  yield takeLatest(constants.ADD_GARBAGETRUCK, addGarageTruck);
}
