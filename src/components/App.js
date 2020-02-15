import React from 'react';
import RepoView from './RepoView';
import UserForm from './UserForm';
import UserInfo from './UserInfo';

export default function App() {
  // return <h1>Hello World</h1>;
  return (
    <>
      <UserForm />
      <UserInfo />
      <RepoView />
    </ >
  );
}
