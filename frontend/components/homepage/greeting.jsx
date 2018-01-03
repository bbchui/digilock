import React from 'react';
import {Link, Redirect, withRouter} from 'react-router-dom';
import UserProfileContainer from '../user/user_profile_container';
import {ProtectedRoute} from '../../util/route_util';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this)
  }

  loginLinks() {
    return(
      <div className="loginlinks">
        <Link to="/login">Login</Link>
        &nbsp;or &nbsp;
        <Link to="/signup">Sign Up</Link>
      </div>
    )
  }

  handleLogout() {
    this.props.logout()
      .then(this.props.history.push('/login'))
  }

  personalGreeting(currentUser, logout) {
    return(
      <div className="personalgreeting">
        <h3>Hello {currentUser.name}!</h3>
        <Link to={`/users/${this.props.currentUser.id}`}>User Profile</Link>
        <button onClick={this.handleLogout}>Logout</button>
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

//         <UserProfileContainer />
