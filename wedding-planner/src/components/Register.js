import React, { Component } from 'react'

export class Register extends Component {
state = {
credentials:{
        firstName:'',
        lastName: '',
        email: '',
        location:''



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
    type="text"
    name="location"
    placeholder="Location"
    value={this.state.credentials.location}
    onChange={this.handleChange}
  />
  <button style = {{backgroundColor: 'red', borderRadius: '2%', margin: '2%' , color:'white' }}>
   Sign Up
  </button>

</form> */}
</div>  
    
        )
    }
}

export default Register
