import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import GithubViewer from './GithubViewer';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={GithubViewer} />
      </Switch>
    </Router>
  );
}
