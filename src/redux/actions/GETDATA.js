// @flow
import { GET_DATA } from "./ActionTypes";

export function request(payload) {
  return {
    payload,
    type: GET_DATA.REQUEST
  };
}

export function success(data) {
  return {
    data,
    type: GET_DATA.SUCCESS
  };
}

export function failure(errorMessage) {
  return {
    errorMessage,
    type: GET_DATA.FAILURE
  };
}
