import {
  REQUEST_BEGIN,
  REQUEST_FALSE,
  GET_LIST_GARBAGETRUCK,
  GET_LIST_GARBAGETRUCK_SUCCESS,
  GET_DETAIL_GARBAGETRUCK,
  GET_DETAIL_GARBAGETRUCK_SUCCESS,
  ADD_GARBAGETRUCK,
  ADD_GARBAGETRUCK_SUCCESS,
  DELETE_GARBAGETRUCK,
  DELETE_GARBAGETRUCK_SUCCESS,
  EDIT_GARBAGETRUCK,
  EDIT_GARBAGETRUCK_SUCCESS,
} from './constants';

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

export function getListGarbageTruck(body) {
  return {
    type: GET_LIST_GARBAGETRUCK,
    body,
  };
}

export function getListGarbageTruckSuccess(data) {
  return {
    type: GET_LIST_GARBAGETRUCK_SUCCESS,
    data,
  };
}

export function getDetailGarbageTruck(body) {
  return {
    type: GET_DETAIL_GARBAGETRUCK,
    body,
  };
}

export function getDetailGarbageTruckSuccess(data) {
  return {
    type: GET_DETAIL_GARBAGETRUCK_SUCCESS,
    data,
  };
}

export function addGarbageTruck(body) {
  return {
    type: ADD_GARBAGETRUCK,
    body,
  };
}

export function addGarbageTruckSuccess(data) {
  return {
    type: ADD_GARBAGETRUCK_SUCCESS,
    data,
  };
}

export function deleteGarbageTruck(id) {
  return {
    type: DELETE_GARBAGETRUCK,
    id,
  };
}

export function deleteGarbageTruckSuccess() {
  return {
    type: DELETE_GARBAGETRUCK_SUCCESS,
  };
}

export function editGarbageTruck(body) {
  return {
    type: EDIT_GARBAGETRUCK,
    body,
  };
}

export function editGarbageTruckSuccess(data) {
  return {
    type: EDIT_GARBAGETRUCK_SUCCESS,
    data,
  };
}
