import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import LoginContainer from './containers/LoginContainer';
import MainMenuContainer from './containers/MainContainer';


export default () => {
  return (
    <App>
      <Switch>
        <Route path={routes.LOGIN} component={LoginContainer} exact />
        <Route path={routes.MAIN} component={MainMenuContainer} exact />
        <Route path="*" component={LoginContainer} />
      </Switch>
    </App>
  );
};
