import {
  DEFAULT,
  DEFAULT_SUCCESS,
  DEFAULT_ANOTHER_SUCCESS,
} from './constants';

import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  success: false,
  message: null,
  nested:{success:false}
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT:
      return state
        .set('loading', true);
    case DEFAULT_SUCCESS:
      return state
        .set('loading', false)
        .set('success', true)
        .set('message', action.message);
    case DEFAULT_ANOTHER_SUCCESS:
      return state
        .set('loading', false)
        .setIn(['nested','success'], true)
        .setIn(['nested','message'], action.message);
    default:
      return state;
  }
}

export default appReducer;
