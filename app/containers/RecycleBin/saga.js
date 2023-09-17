import { call, put, takeLatest } from 'redux-saga/effects';
import * as constants from './constant';
import * as actions from './actions';
import { axiosGet, axiosPost } from '../../utils/request';

export function* getListRecycleBin() {
  const path = '/api/v1/RecycleBin';
  try {
    const res = yield call(axiosGet, path);
    if (res.data) {
      yield put(actions.getListrecycleBinSuccess(res.data));
    } else {
      yield put(actions.requestFalse());
    }
  } catch (error) {
    yield put(actions.requestFalse());
  }
}

export function* addRecycleBin(action) {
  const path = '/api/v1/RecycleBin';
  try {
    const res = yield call(axiosPost, path, action.body);
    if (res.data) {
      yield put(actions.addrecycleBinSuccess(res.data));
    } else {
      yield put(actions.requestFalse());
    }
  } catch (error) {
    yield put(actions.requestFalse());
  }
}

export default function* watchFetchMonitor() {
  yield takeLatest(constants.GET_LIST_RECYCLEBIN, getListRecycleBin);
  yield takeLatest(constants.ADD_RECYCLEBIN, addRecycleBin);
}
