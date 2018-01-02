import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '',
                   password: '',
                   name: ''}
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/')
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
    this.setState({ username: '',
                   password: '',
                    name: '' });
  }

  formLink() {
    if (this.props.formType === 'login') {
      return <Link to='/signup'>sign up</Link>
    } else {
      return <Link to='/login'>login</Link>
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  signupForm() {
    if (this.props.formType === 'signup') {
      return(
        <div>
          <br/>
          <label>Name:
            <input type="text"
              value={this.state.name}
              onChange={this.update('name')}
              />
          </label>
        </div>
      )
    } else {
      return(
        <br/>
      )
    }
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          Welcome!
          <br/>
          <div>
              {this.signupForm()}
            <label>Email:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                />
            </label>
            <br/>
              <label>Password:
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  />
              </label>
              <br/>
              <input type="submit" value="Submit" />
          </div>
        </form>

        Please {this.props.formType} or {this.formLink()} instead
        {this.renderErrors()}
      </div>
    )
  }

}

export default withRouter(SessionForm);
