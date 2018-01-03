import React from 'react';
import {Link} from 'react-router-dom'

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.editUser = this.editUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this)
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname){
      this.props.fetchUser(nextProps.match.params.userId);
    }
  }

  editUser() {
    if (this.props.currentUser && this.props.currentUser.id === parseInt(this.props.match.params.userId)) {
      return(
        <Link to={`/users/${this.props.currentUser.id}/edit`}>Change Password</Link>
      )
    }
  }

  handleLogout() {
    this.props.logout()
      .then(this.props.history.push('/login'))
  }

  render() {
    let user = this.props.currentUser ? this.props.currentUser.name : null

    return(
      <div className="userprofile">
        {user} Settings
        {this.editUser()}
        <Link to='/'>Homepage</Link>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    )
  }
}

export default UserProfile;
