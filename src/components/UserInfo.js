import React from 'react';
import PropTypes from 'prop-types';

//import { Link, useParams } from 'react-router-dom';
//const userinfo = require('../../data/MyGithubInfo.json');

const UserInfo = ({since, title, followers, following, html_url, login}) => {
  //const since = new Date(userinfo.created_at).toDateString();
  return (
    <section>
      user: {login} user since:{since}<br />
      following: {following} followers: {followers}
      <br /><a href={html_url}>profile: {html_url}</a>
      {/* user:{userinfo.login} user since:{since}<br />
      following: {userinfo.following} followers: {userinfo.followers}
      <br /><a href={userinfo.html_url}>profile: {userinfo.html_url}</a> */}
    </section>
  );
};

export default UserInfo;
