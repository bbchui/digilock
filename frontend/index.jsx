import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import configureStore from './store/store';
import {login, signup, logout} from './actions/session_actions'
import {updateUser, fetchUser} from './actions/user_actions'

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser }};
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.store = store
  window.updateUser = updateUser
  window.fetchUser = fetchUser

  const root = document.getElementById('root');

  ReactDOM.render(<Root store={ store }/>, root);
});
