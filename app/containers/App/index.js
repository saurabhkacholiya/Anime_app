import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchScreen from 'containers/SearchScreen/index';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={SearchScreen} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
