import merge  from 'lodash/merge';
import { RECEIVE_USER, RECEIVE_ERRORS } from '../actions/user_actions';

const _defaultState = { user: null, errors: []}

const UserReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, action.user, errors: [])
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, oldState, {errors});
    default:
      return oldState
  }
}

export default UserReducer;
