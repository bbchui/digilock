import React from 'react';

class EditUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {password: '', userId: this.props.currentUser.id}
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({password: ''})
    this.props.updateUser(this.state)
      .then((res) => this.props.history.push(`/users/${this.props.currentUser.id}`))
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  renderErrors() {
    if (this.props.errors !== undefined) {
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    } else {
      null
    }
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>New Password:
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {this.renderErrors()}
      </div>
    )
  }
}

export default EditUser
