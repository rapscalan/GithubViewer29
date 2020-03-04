import { FETCH_REPOS_LOADING, FETCH_REPOS } from '../actions/repoActions';

const initialState = {
  loading: true,
  list: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_REPOS_LOADING:
      return { ...state, loading: true };
    case FETCH_REPOS:
      return { ...state, loading: false, list: action.payload };
    default: 
      return state;
  }
}
