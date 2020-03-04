import { getRepos } from '../services/githubApi';

export const FETCH_REPOS_LOADING = 'FETCH_REPOS_LOADING';
export const FETCH_REPOS = 'FETCH_REPOS';
export const fetchRepos = (username) => dispatch => {
  dispatch({ type: FETCH_REPOS_LOADING });
  return getRepos(username)
    .then(repos => dispatch({
      type: FETCH_REPOS,
      payload: repos
    }));
};
