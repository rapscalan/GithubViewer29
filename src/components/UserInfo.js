import React from 'react';
import { Link, useParams } from 'react-router-dom';
const userinfo = require('../../data/MyGithubInfo.json');

const UserInfo = () => {
  const since = new Date(userinfo.created_at).toDateString();
  return (
    <section>
      user:{userinfo.login} user since:{since}<br />
      following: {userinfo.following} followers: {userinfo.followers}
      <br /><a href={userinfo.html_url}>profile: {userinfo.html_url}</a>
    </section>
  );
};

export default UserInfo;
