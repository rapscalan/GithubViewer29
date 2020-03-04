import { getUsers } from '../services/githubApi';

export const FETCH_USERS_LOADING = 'FETCH_USERS_LOADING';
export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = (username) => dispatch => {
  dispatch({ type: FETCH_USERS_LOADING });
  return getUsers(username)
    .then(users => dispatch({
      type: FETCH_USERS,
      payload: users
    }));
};
