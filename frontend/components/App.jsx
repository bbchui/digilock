import React from 'react';
import GreetingContainer from './homepage/greeting_container';
import SessionFormContainer from './session/session_form_container';
import UserProfileContainer from './user/user_profile_container';
import EditUserContainer from './user/edit_user_container'
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div>
    <header>
      <h1>Digilock Coding Challenge</h1>
      <Route exact path='/' component={GreetingContainer} />
    </header>

    <AuthRoute path='/login' component={SessionFormContainer} />
    <AuthRoute path='/signup' component={SessionFormContainer} />
    <Route exact path='/users/:userId' component={UserProfileContainer} />
    <Route exact path='/users/:userId/edit' component={EditUserContainer} />
  </div>
)

export default App
