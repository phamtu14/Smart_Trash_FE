import {
  REQUEST_BEGIN,
  REQUEST_FALSE,
  GET_LIST_RECYCLEBIN,
  GET_LIST_RECYCLEBIN_SUCCESS,
  GET_DETAIL_RECYCLEBIN,
  GET_DETAIL_RECYCLEBIN_SUCCESS,
  ADD_RECYCLEBIN,
  ADD_RECYCLEBIN_SUCCESS,
  DELETE_RECYCLEBIN,
  DELETE_RECYCLEBIN_SUCCESS,
  EDIT_RECYCLEBIN,
  EDIT_RECYCLEBIN_SUCCESS,
} from './constant';

export function requestBegin() {
  return {
    type: REQUEST_BEGIN,
  };
}

export function requestFalse() {
  return {
    type: REQUEST_FALSE,
  };
}

export function getListrecycleBin(body) {
  return {
    type: GET_LIST_RECYCLEBIN,
    body,
  };
}

export function getListrecycleBinSuccess(data) {
  return {
    type: GET_LIST_RECYCLEBIN_SUCCESS,
    data,
  };
}

export function getDetailrecycleBin(body) {
  return {
    type: GET_DETAIL_RECYCLEBIN,
    body,
  };
}

export function getDetailrecycleBinSuccess(data) {
  return {
    type: GET_DETAIL_RECYCLEBIN_SUCCESS,
    data,
  };
}

export function addrecycleBin(body) {
  return {
    type: ADD_RECYCLEBIN,
    body,
  };
}

export function addrecycleBinSuccess(data) {
  return {
    type: ADD_RECYCLEBIN_SUCCESS,
    data,
  };
}

export function deleterecycleBin(id) {
  return {
    type: DELETE_RECYCLEBIN,
    id,
  };
}

export function deleterecycleBinSuccess() {
  return {
    type: DELETE_RECYCLEBIN_SUCCESS,
  };
}

export function editrecycleBin(body) {
  return {
    type: EDIT_RECYCLEBIN,
    body,
  };
}

export function editrecycleBinSuccess(data) {
  return {
    type: EDIT_RECYCLEBIN_SUCCESS,
    data,
  };
}
