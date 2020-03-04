import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { getUsers, isLoadingUsers } from '../selectors/usersSelectors';
//import { fetchUsers } from '../actions/userActions';
//import getUsers from '../selectors/usersSelectors';

//import { Link, useParams } from 'react-router-dom';
//const userinfo = require('../../data/MyGithubInfo.json');

const UserInfo = (query) => 
{
  const state = useSelector(state => state);
  const user = getUsers(state);
  console.log('&^&^', user, '736378');
  //const dispatch = useDispatch();
  // const userInfo = useSelector(getUsers); console.log('XXXXXXX', userInfo, 'XXXXXX');
  // useEffect(() => {
  //   dispatch(fetchUsers(query));

  // }, []);
  //const since = new Date(userinfo.created_at).toDateString();
  // const user = 
  return (
    <section>
      user: {user.userdetail} user since:{user.since}<br />
      following: {user.following} followers: {user.followers}
      <br /><a href={user.html_url}>profile: {user.html_url}</a>
      {/* user:{userinfo.login} user since:{since}<br />
      following: {userinfo.following} followers: {userinfo.followers}
      <br /><a href={userinfo.html_url}>profile: {userinfo.html_url}</a> */}
    </section>
  );
};

export default UserInfo;
