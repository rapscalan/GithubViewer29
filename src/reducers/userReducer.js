import { FETCH_USERS_LOADING, FETCH_USERS } from '../actions/userActions';

const initialState = {
  loading: true,
  userdetail: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_USERS_LOADING:
      return { ...state, loading: true };
    case FETCH_USERS:
      return { ...state, loading: false, userdetail: action.payload };
    default: 
      return state;
  }
}
