import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../actions/userActions';
import { fetchRepos } from '../actions/repoActions';

const UserForm = () => {
  const [query, setQuery] = useState('');
  const dispatchEvent = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    dispatchEvent(fetchUsers(query));
    dispatchEvent(fetchRepos(query));
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text"
        onChange={({ target }) => setQuery(target.value)}
        placeholder="github user" />
      <button>Search</button>
    </form>
  );
};

export default UserForm;
