// @flow
import ServerControll from '../server';

export const SET_SERVER_PATH = 'SET_SERVER_PATH';
export const RUN_SERVER = 'RUN_SERVER';
export const STOP_SERVER = 'STOP_SERVER';

export function setServerPath(path: string) {
  return {
    type: SET_SERVER_PATH,
    path
  };
}

export function runServer() {
  return (dispatch, getState) => {
    const { serverPath, port, isServerRunning } = getState().configure;
    if (isServerRunning) return;

    ServerControll.runServer(serverPath, port);

    dispatch({
      type: RUN_SERVER
    });
  };
}

export function stopServer() {
  return (dispatch, getState) => {
    const { isServerRunning } = getState().configure;
    if (!isServerRunning) return;

    ServerControll.stopServer();

    dispatch({
      type: STOP_SERVER
    });
  };
}
