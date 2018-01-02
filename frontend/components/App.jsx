import React from 'react';
import GreetingContainer from './homepage/greeting_container';
import SessionFormContainer from './session/session_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util'


const App = () => (
  <div>
    <header>
      <h1>Digilock Coding Challenge</h1>
      <GreetingContainer />
    </header>

    <AuthRoute path='/login' component={SessionFormContainer} />
    <AuthRoute path='/signup' component={SessionFormContainer} />
  </div>
)

export default App
