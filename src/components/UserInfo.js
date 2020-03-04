import React from 'react';

import { useSelector } from 'react-redux';
import { getUsers } from '../selectors/usersSelectors';

export default function UserInfo() {
  const state = useSelector(state => state);
  const user = getUsers(state);

  return (
    <>
      {user.user.userdetail &&
        <section>
          user: {user.user.userdetail.username} <br />
          following: {user.user.
            userdetail.followingCount} followers: {user.user.
            userdetail.followerCount}
          <br /><a href={user.user.
            userdetail.html_url}>profile: {user.user.userdetail.html_url}</a>
        </section>}
    </ >
  );
}
