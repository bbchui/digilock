import React from 'react';
import {Link} from 'react-router-dom'

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.editUser = this.editUser.bind(this);
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
        <Link to={`/users/${this.props.currentUser.id}/edit`}>Edit User</Link>
      )
    }
  }

  render() {
    return(
      <div>
        {this.props.currentUser.name} Settings
        {this.editUser()}
      </div>
    )
  }
}

export default UserProfile;
