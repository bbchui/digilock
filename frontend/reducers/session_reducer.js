import merge from 'lodash/merge'
import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';

const nullUser = {currentUser: null, errors: []};

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.currentUser, errors: []}
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, nullUser, {errors});
    case CLEAR_ERRORS:
      return merge({}, nullUser.errors, {errors: []});
    default:
      return state;
  }
};

export default SessionReducer;
