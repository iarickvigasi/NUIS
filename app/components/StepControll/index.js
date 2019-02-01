// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
import commonStyles from '../Common.css';
import { Action } from '../../reducers/types';

type Props = {
  isServerRunning: boolean,
  serverPath: string,
  stopServer: Action,
  runServer: Action
};

export default class StepControll extends Component<Props> {
  props: Props;

  renderStatus = () => {
    const { isServerRunning } = this.props;
    if (isServerRunning) {
      return <div> Status: Server is UP! </div>;
    }
    return <div> Status: Server is not running </div>;
  };

  renderControllButton = () => {
    const { isServerRunning, stopServer, runServer } = this.props;
    console.log(this.props);
    if (isServerRunning) {
      return (
        <div className={commonStyles.button} onClick={stopServer}>
          Stop
        </div>
      );
    }
    return (
      <div className={commonStyles.button} onClick={runServer}>
        Start
      </div>
    );
  };

  render() {
    const { serverPath, stopServer } = this.props;
    return (
      <div className={commonStyles.container} data-tid="container">
        <h2>NUIS</h2>

        <div className={commonStyles.alligner}>
          <h3>Node UI Server</h3>
          <br />

          <div> Path: {serverPath} </div>
          {this.renderStatus()}
          <br />
          {this.renderControllButton()}
        </div>

        <Link
          to={routes.STEP_PATH}
          className={commonStyles.backLink}
          onClick={stopServer}
        >
          <i className="fas fa-arrow-left" />
        </Link>
      </div>
    );
  }
}
