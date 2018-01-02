import React from 'react';
import {Link, Redirect, withRouter} from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  loginLinks() {
    return(
      <div>
        <Link to="/login">Login</Link>
        &nbsp;or &nbsp;
        <Link to="/signup">Sign Up</Link>
      </div>
    )
  }

  personalGreeting(currentUser, logout) {
    return(
      <div>
        Hello {currentUser.name}!
        <button onClick={logout}>Logout</button>
      </div>
    )
  }

  render() {
    return(
      <div>
        {this.props.currentUser ? this.personalGreeting(this.props.currentUser, this.props.logout) : this.loginLinks()}
      </div>
    )
  }
}

export default withRouter(Greeting)
