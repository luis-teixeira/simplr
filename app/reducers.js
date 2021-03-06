
import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import appReducer from './containers/App/reducer';

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  return combineReducers({
    app:appReducer,
  });
}
