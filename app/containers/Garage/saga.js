import { call, put, takeLatest } from 'redux-saga/effects';
import * as constants from './constant';
import * as actions from './actions';
import { axiosGet, axiosPost } from '../../utils/request';

export function* getListGarage() {
  const path = '/api/v1/Garage';
  try {
    const res = yield call(axiosGet, path);
    console.log(res);
    if (res.data) {
      yield put(actions.getListGarageSuccess(res.data));
    } else {
      yield put(actions.requestFalse());
    }
  } catch (error) {
    yield put(actions.requestFalse());
  }
}

export function* addGarage(action) {
  const path = '/api/v1/Garage';
  try {
    const res = yield call(axiosPost, path, action.body);
    if (res.data) {
      yield put(actions.getListGarageSuccess(res.data));
      action.callback(res.data);
    } else {
      yield put(actions.requestFalse());
    }
  } catch (error) {
    yield put(actions.requestFalse());
  }
}

export default function* watchFetchMonitor() {
  yield takeLatest(constants.GET_LIST_GARAGE, getListGarage);
  yield takeLatest(constants.ADD_GARAGE, addGarage);
}
