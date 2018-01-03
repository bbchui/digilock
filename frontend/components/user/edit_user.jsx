import React from 'react';

class EditUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {password: '', userId: this.props.currentUser.id}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  handleSubmit(e) {
    console.log(this.props);
    e.preventDefault();
    this.setState({password: ''})
    this.props.updateUser(this.state)
      .then((res) => this.props.history.push(`/users/${this.props.match.params.userId}`))
  }
  handleCancel(e) {
    e.preventDefault();
    this.props.history.push('/')
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  renderErrors() {
    if (this.props.errors !== undefined) {
      return(
        <ul className="errors">
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
        <form onSubmit={this.handleSubmit} className="changepassword">
          <label>New Password:
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              />
          </label>
          <button onClick={this.handleSubmit}>Submit</button>
          <button onClick={this.handleCancel}>Cancel</button>

        </form>
        {this.renderErrors()}
      </div>
    )
  }
}

export default EditUser
