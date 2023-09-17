import {
  REQUEST_BEGIN,
  REQUEST_FALSE,
  GET_LIST_NOTIFICATION,
  GET_LIST_NOTIFICATION_SUCCESS,
  GET_DETAIL_NOTIFICATION,
  GET_DETAIL_NOTIFICATION_SUCCESS,
  ADD_NOTIFICATION,
  ADD_NOTIFICATION_SUCCESS,
  DELETE_NOTIFICATION,
  DELETE_NOTIFICATION_SUCCESS,
  EDIT_NOTIFICATION,
  EDIT_NOTIFICATION_SUCCESS,
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

export function getListNotification(body) {
  return {
    type: GET_LIST_NOTIFICATION,
    body,
  };
}

export function getListNotificationSuccess(data) {
  return {
    type: GET_LIST_NOTIFICATION_SUCCESS,
    data,
  };
}

export function getDetailNotification(body) {
  return {
    type: GET_DETAIL_NOTIFICATION,
    body,
  };
}

export function getDetailNotificationSuccess(data) {
  return {
    type: GET_DETAIL_NOTIFICATION_SUCCESS,
    data,
  };
}

export function addNotification(body) {
  return {
    type: ADD_NOTIFICATION,
    body,
  };
}

export function addNotificationSuccess(data) {
  return {
    type: ADD_NOTIFICATION_SUCCESS,
    data,
  };
}

export function deleteNotification(id) {
  return {
    type: DELETE_NOTIFICATION,
    id,
  };
}

export function deleteNotificationSuccess() {
  return {
    type: DELETE_NOTIFICATION_SUCCESS,
  };
}

export function editNotification(body) {
  return {
    type: EDIT_NOTIFICATION,
    body,
  };
}

export function editNotificationSuccess(data) {
  return {
    type: EDIT_NOTIFICATION_SUCCESS,
    data,
  };
}
