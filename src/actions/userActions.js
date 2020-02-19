import { getUsers } from '../services/githubApi';

export const FETCH_USERS_LOADING = 'FETCH_USERS_LOADING';
export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = () => dispatch => {
  dispatch({ type: FETCH_USERS_LOADING });
  return getUsers()
    .then(users => dispatch({
      type: FETCH_USERS,
      payload: users
    }));
};
