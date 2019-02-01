// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
import styles from './Home.css';
import stylesCommon from '../Common.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={stylesCommon.container} data-tid="container">
        <h2>NUIS</h2>
        <div className={stylesCommon.alligner}>
          <h3>Node UI Server</h3>
          <Link to={routes.STEP_PATH} className={styles.startBlock}>
            <i className="fas fa-arrow-right" />
            <span>Let&apos;s make a server</span>
          </Link>
        </div>
      </div>
    );
  }
}
