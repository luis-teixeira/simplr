import {
  DEFAULT,
  DEFAULT_SUCCESS,
  DEFAULT_ANOTHER_SUCCESS,
} from './constants';

/**
 *
 * @return {object} An action object with a type of DEFAULT
 */
export function defaultAction() {
  return {
    type: DEFAULT,
  };
}

/**
 * Dispatched when the token are loaded by the request saga
 *
 * @param  {payload} response from a call
 *
 * @return {object} An action object with a type of DEFAULT_SUCCESS passing the response
 */
export function defaultActionSuccess(payload) {
  return {
    type: DEFAULT_SUCCESS,
    message:payload.response,
  };
}

/**
 *
 * @return {object} An action object with a type of DEFAULT_ANOTHER_SUCCESS passing the response
 */
export function defaultActionAnotherSuccess(payload) {
  return {
    type: DEFAULT_ANOTHER_SUCCESS,
    message: payload.response,
  };
}
