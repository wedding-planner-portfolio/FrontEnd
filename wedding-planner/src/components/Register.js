import React, { Component } from 'react'
import { connect } from 'react-redux';
import {register} from '../actions';

export class Register extends Component {
state = {
credentials:{
        firstName:'',
        lastName: '',
        email: '',
        password:'',
        phone:''



}



}


handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  register = e => {
    e.preventDefault();
    this.props.register(this.state.credentials).then(res => {
      if (res) {
        this.props.history.push('/login');
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
    name="firstName"
    placeholder="First Name"
    value={this.state.credentials.firstName}
    onChange={this.handleChange}
  />
  <input
    type="text"
    name="lastName"
    placeholder="Last Name"
    value={this.state.credentials.lastName}
    onChange={this.handleChange}
  />
  <input
    type="text"
    name="email"
    placeholder="Email"
    value={this.state.credentials.email}
    onChange={this.handleChange}
  />
  <input
    type="password"
    name="password"
    placeholder="password"
    value={this.state.credentials.password}
    onChange={this.handleChange}
  />
  <input
    type="text"
    name="phone"
    placeholder= "phone number"
    value={this.state.credentials.phone}
    onChange={this.handleChange}
  />
  <button style = {{backgroundColor: 'red', borderRadius: '2%', margin: '2%' , color:'white' }}>
   Sign Up
  </button>

</form> 
</div>  
    
        )
    }
}



const mapStateToProps = state => ({
  error: state.error,
  register: state.register
});


export default connect(
  mapStateToProps,
  { register }
)(Register);
