import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import RepoView from './RepoView';
import UserForm from './UserForm';
import UserInfo from './UserInfo';
import GithubViewer from './GithubViewer';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={GithubViewer} />
        {/* <Route exact path="/:id" component={UserForm} />
        <Route exact path="/" component={RepoView} /> */}
        {/* <UserForm />
      <UserInfo />
      <RepoView /> */}
      </Switch>
    </Router>
  );
}
