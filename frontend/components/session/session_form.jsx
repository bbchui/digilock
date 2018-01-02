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
      return <Link to='/signup'>sign up instead</Link>
    } else {
      return <Link to='/login'>log in instead</Link>
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
        <label>Name:
          <input type="text"
            value={this.state.name}
            onChange={this.update('name')}
            />
        </label>
      )
    } else {
      null
    }
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          Welcome
          <br/>
          Please {this.props.formType} or {this.formLink()}
          {this.renderErrors()}
          <div>
            <br/>
              {this.signupForm()}
            <br/>
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
      </div>
    )
  }

}

export default withRouter(SessionForm);
