import {
  REQUEST_BEGIN,
  REQUEST_FALSE,
  GET_LIST_GARAGE,
  GET_LIST_GARAGE_SUCCESS,
  GET_DETAIL_GARAGE,
  GET_DETAIL_GARAGE_SUCCESS,
  ADD_GARAGE,
  ADD_GARAGE_SUCCESS,
  DELETE_GARAGE,
  DELETE_GARAGE_SUCCESS,
  EDIT_GARAGE,
  EDIT_GARAGE_SUCCESS,
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

export function getListGarage(body) {
  return {
    type: GET_LIST_GARAGE,
    body,
  };
}

export function getListGarageSuccess(data) {
  return {
    type: GET_LIST_GARAGE_SUCCESS,
    data,
  };
}

export function getDetailGarage(body) {
  return {
    type: GET_DETAIL_GARAGE,
    body,
  };
}

export function getDetailGarageSuccess(data) {
  return {
    type: GET_DETAIL_GARAGE_SUCCESS,
    data,
  };
}

export function addGarage(body, callback) {
  return {
    type: ADD_GARAGE,
    body,
    callback,
  };
}

export function addGarageSuccess(data) {
  return {
    type: ADD_GARAGE_SUCCESS,
    data,
  };
}

export function deleteGarage(id) {
  return {
    type: DELETE_GARAGE,
    id,
  };
}

export function deleteGarageSuccess() {
  return {
    type: DELETE_GARAGE_SUCCESS,
  };
}

export function editGarage(body) {
  return {
    type: EDIT_GARAGE,
    body,
  };
}

export function editGarageSuccess(data) {
  return {
    type: EDIT_GARAGE_SUCCESS,
    data,
  };
}
