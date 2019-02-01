// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
import stylesCommon from '../Common.css';
import stylesStepPath from './StepPath.css';
import { Action } from '../../reducers/types';

const { dialog } = require('electron').remote;

type Props = {
  setServerPath: Action,
  serverPath: string
};

export default class Home extends Component<Props> {
  props: Props;

  openDiolog = () => {
    const { setServerPath } = this.props;
    const serverPath = dialog
      .showOpenDialog({
        properties: ['openDirectory']
      })
      .join('');

    setServerPath(serverPath);
  };

  renderHint = () => {
    const { serverPath } = this.props;
    if (!serverPath) {
      return <p> Choose a folder to serve </p>;
    }

    return <p> Your want to serve: {serverPath} </p>;
  };

  renderNextBtn = () => {
    const { serverPath } = this.props;

    if (!serverPath) return null;
    return (
      <Link to={routes.STEP_CONTROLL}>
        <div className={`${stylesCommon.button} ${stylesStepPath.nextBtn}`}>
          Next
        </div>
      </Link>
    );
  };

  render() {
    return (
      <div className={stylesCommon.container} data-tid="container">
        <h2>NUIS</h2>

        <div className={stylesCommon.alligner}>
          <h3>Node UI Server</h3>
          {this.renderHint()}

          <div className={stylesCommon.flex}>
            <div
              className={stylesCommon.button}
              onClick={this.openDiolog}
              role="button"
            >
              Open
            </div>
            {this.renderNextBtn()}
          </div>
        </div>
      </div>
    );
  }
}
