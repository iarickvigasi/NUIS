// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import configure from './configure';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    configure
  });
}
