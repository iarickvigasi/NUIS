import React from 'react';
import { Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import StepPathPage from './containers/StepPathPage';
import StepControllPage from './containers/StepControllPage';
import AnimateRoutes from './utils/AnimateRoutes';

export default () => (
  <App>
    <AnimateRoutes>
      <Route path={routes.HOME} component={HomePage} exact />
      <Route path={routes.STEP_PATH} component={StepPathPage} />
      <Route path={routes.STEP_CONTROLL} component={StepControllPage} />
    </AnimateRoutes>
  </App>
);
