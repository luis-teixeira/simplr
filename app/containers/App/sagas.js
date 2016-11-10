
import { take, call, select, put, fork, cancel } from 'redux-saga/effects';
import { takeLatest, takeEvery} from 'redux-saga';

import {
  DEFAULT,
  DEFAULT_SUCCESS,
  DEFAULT_ANOTHER_SUCCESS,
} from './constants';

import {
  defaultAction,
  defaultActionSuccess,
  defaultActionAnotherSuccess,
} from './actions';
import request from 'utils/request';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

/**
 *
 * Watches for DEFAULT action and calls handler
 *
 */
function* defaultActionWorker() {
    yield put(defaultActionSuccess({response:'from <code>src/App/saga.js</code>'}));

    // const requestURL = 'api/some_url';
    // Call our request helper (see 'utils/request')
    // const call = yield call(request, requestURL);
    //
    // if (!call.err) {
    //  yield put(defaultActionSuccess({response:'from saga.js'}));
    // } else {
    //   console.log(error);
    // }

}

/**
 * Watches for DEFAULT_SUCCESS action and calls handler
 */
export function* defaultActionSuccessWorker() {
  yield call(delay, 1000)
  yield put(defaultActionAnotherSuccess({response:'  another response from <code>src/App/saga.js</code> with delay 1000'}));
}

/**
 * Root saga manages watcher lifecycle
 */
export function* appData() {
  yield takeEvery(DEFAULT, defaultActionWorker);
  yield takeEvery(DEFAULT_SUCCESS, defaultActionSuccessWorker);
}

export default appData;
// Bootstrap sagas
// export default [
//   globalData,
// ];
