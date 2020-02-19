import React from 'react';
import UserForm from './UserForm';
import RepoView from './RepoView';
import UserInfo from './UserInfo';

export default function GithubViewer(){
  return (
    <>
      <UserForm />
      <UserInfo />
      <RepoView />
    </>
  );
}
