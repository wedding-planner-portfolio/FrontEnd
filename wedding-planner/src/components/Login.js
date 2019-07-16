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
        <div style={{marginTop:'10%'}}  >
          <h1 style={{color:'red', marginLeft:'30%', fontFamily:'Courgie'}}  >Login</h1>
          <form  onSubmit={this.login}>  
            <input
            style = {{ borderRadius:'4%', width:'400px', height:'53px', textIndent: '30px', marginLeft:'30%', marginBottom:'2%', border:'grey solid 2px', backgroundColor:'darkGrey', color:'white'}}
              type="text"
              name="username"
              placeholder="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
            <input
              style = {{ borderRadius:'4%', width:'400px', height:'53px', textIndent: '30px', marginLeft:'50%',marginRight:'50%', border:'grey solid 2px', backgroundColor:'darkGrey', color:'white'}}
              type="password"
              name="password"
              placeholder="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <button style = {{backgroundColor: 'red', borderRadius: '2%', justifyContent:'center', alignItems:'center', margin: '2%' , color:'white' }} onClick={this.login}>Log In</button>
          </form>
        </div>
      )
    } else {
    return (
      <div style={{marginTop:'20%'}}  >
        <Register /> 
      </div>
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