// @flow
import { SET_SERVER_PATH, RUN_SERVER, STOP_SERVER } from '../actions/configure';
import type { Action } from './types';

const defaultState = {
  port: 9090,
  serverPath: null,
  isServerRunning: false
};

export default function configure(state = defaultState, action: Action) {
  console.log(action);
  switch (action.type) {
    case SET_SERVER_PATH:
      return { ...state, serverPath: action.path };
    case RUN_SERVER:
      return { ...state, isServerRunning: true };
    case STOP_SERVER:
      return { ...state, isServerRunning: false };
    default:
      return state;
  }
}
