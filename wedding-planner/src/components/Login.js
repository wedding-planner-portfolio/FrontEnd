import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { login } from '../actions';
// import styled from 'styled-components'





class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials).then(res => {
      if (res) {
        this.props.history.push('/protected');
      }
    });
  };

  render() {
    return (
      <div style={{marginTop:'20%'}}  >

        <h1 style={{color:'white', marginRight:'5%'}}  >Login</h1>
        <form  onSubmit={this.login}>  
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button style = {{backgroundColor: 'red', borderRadius: '2%', margin: '2%' , color:'white' }}>
            {this.props.loggingIn ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              'Log in'
            )}
          </button>
        
        </form>
        <button style = {{backgroundColor: 'red', borderRadius: '2%', margin: '2%' , color:'white' }} onClick={this.handleLogout} >Logout</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error,
  loggingIn: state.loggingIn
});

export default connect(
  mapStateToProps,
  { login }
)(Login);