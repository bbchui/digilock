import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user: user
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const fetchUser = userId => dispatch => (
  UserApiUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)))
);

export const updateUser = userId => dispatch => (
  UserApiUtil.updateUser(userId)
    .then(user => dispatch(receiveUser(user)),
    err => dispatch(receiveErrors(err.responseJSON)))
);
