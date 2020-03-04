import React, { useEffect } from 'react';
import Loading from '../Loading';
import User from './UserInfo';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../actions/userActions';
import { getUsers, isLoadingUsers } from '../selectors/usersSelectors';
import UserInfo from './UserInfo';

const UsersPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(isLoadingUsers);
  const users = useSelector(getUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if(loading) return <Loading />;

  const userElements = users.map(user => (
    <li key={user.id}>
      <UserInfo {...user} />
    </li>
  ));

  return (
    <ul>
      {userElements}
    </ul>
  );
};

UsersPage.prototype = {};

export default UsersPage;
