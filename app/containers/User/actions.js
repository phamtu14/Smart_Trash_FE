import {
  REQUEST_BEGIN,
  REQUEST_FALSE,
  GET_LIST_USER,
  GET_LIST_USER_SUCCESS,
  GET_DETAIL_USER,
  GET_DETAIL_USER_SUCCESS,
  ADD_USER,
  ADD_USER_SUCCESS,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  EDIT_USER,
  EDIT_USER_SUCCESS,
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

export function getListUser(body) {
  return {
    type: GET_LIST_USER,
    body,
  };
}

export function getListUserSuccess(data) {
  return {
    type: GET_LIST_USER_SUCCESS,
    data,
  };
}

export function getDetailUser(body) {
  return {
    type: GET_DETAIL_USER,
    body,
  };
}

export function getDetailUserSuccess(data) {
  return {
    type: GET_DETAIL_USER_SUCCESS,
    data,
  };
}

export function addUser(body) {
  return {
    type: ADD_USER,
    body,
  };
}

export function addUserSuccess(data) {
  return {
    type: ADD_USER_SUCCESS,
    data,
  };
}

export function deleteUser(id) {
  return {
    type: DELETE_USER,
    id,
  };
}

export function deleteUserSuccess() {
  return {
    type: DELETE_USER_SUCCESS,
  };
}

export function editUser(body) {
  return {
    type: EDIT_USER,
    body,
  };
}

export function editUserSuccess(data) {
  return {
    type: EDIT_USER_SUCCESS,
    data,
  };
}
