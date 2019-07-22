import React from 'react';
import { connect } from 'react-redux';
// import Loader from 'react-loader-spinner';
import Register from './Register'
import { login } from '../actions';
// import CreatePostsPageForm from './CreatePostsPageForm';
import { withRouter } from 'react-router-dom';
// import styled from 'styled-components'

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    },
    register: false,
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
      this.props.history.push('/protected');
    })
  };

  signup = e => {
    e.preventDefault();
    this.setState({ register: true })
  }

  render() {
    
    if (this.state.register === false){
      return (
        <div className="container container-fluid">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 m-3">
              <h1 className="wp-heading2">Login</h1>
              <form onSubmit={this.login} className="d-flex flex-column">  
                <input
                  type="text"
                  name="username"
                  placeholder="Email Address"
                  value={this.state.credentials.username}
                  onChange={this.handleChange}
                  className="wp-input"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.credentials.password}
                  onChange={this.handleChange}
                  className="wp-input"
                />
                <button onClick={this.login} className="btn btn-primary">Log In</button>
              </form>
            </div>
          </div>
        </div>
      )
    } else {
    return (
        <Register /> 
      )
    }
  }
}

  const LoginRouter = withRouter(Login);


const mapStateToProps = state => ({
  error: state.error,
  loggingIn: state.loggingIn,
  user: state.user

});


export default connect(
  mapStateToProps,
  { login }
)  (LoginRouter);

/* <button style = {{backgroundColor: 'red', borderRadius: '2%', margin: '2%' , color:'white' }}>
            {this.props.user ? (
              <CreatePostsPageForm/>
            ) : (
              <Register/>
            )} */
/* <button style = {{backgroundColor: 'red', borderRadius: '2%', margin: '2%' , color:'white' }} onClick={this.handleLogout} >Logout</button> */