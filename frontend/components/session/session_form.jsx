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

  formMessage() {
    if (this.props.formType === 'login') {
      return (
        <p className="login">Please enter your Email and Password!</p>
      )
    } else {
      return(
        <p className="login">Please enter your information to create and new account!</p>
      )
    }
  }

  renderErrors() {
    return(
      <ul className="errors">
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
        <label>Name:
          <input type="text"
            value={this.state.name}
            onChange={this.update('name')}
            />
        </label>
      )
    } else {
      return(
        null
      )
    }
  }

  render() {
    return(
      <div className="sessionform">
        <form onSubmit={this.handleSubmit} className="session">
          <br/>
          {this.formMessage()}
          <div className="inputs">
            <br/>
            {this.signupForm()}
            <label>Email:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                />
            </label>
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

        <p>Please {this.props.formType} or {this.formLink()} instead</p>
        {this.renderErrors()}
      </div>
    )
  }

}

export default withRouter(SessionForm);
