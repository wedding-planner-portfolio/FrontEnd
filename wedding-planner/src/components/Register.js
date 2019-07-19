import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
        this.props.history.push('/login');
      }
    );
  };




    render() {
        return (
    
              <div style={{marginTop:'15%'}}  >

<h1 style={{color:'white', marginLeft:'30%'}}  >Register</h1>
<form  onSubmit={this.register}>  
  <input
  style = {{ borderRadius:'4%', width:'400px', height:'53px', textIndent: '30px', marginLeft:'40%', border:'grey solid 2px', backgroundColor:'darkGrey', color:'white'}}
    type="text"
    name="firstName"
    placeholder="First Name"
    value={this.state.credentials.firstName}
    onChange={this.handleChange}
  />
  <input
  style = {{ borderRadius:'4%', width:'400px', height:'53px', textIndent: '30px', marginLeft:'40%', border:'grey solid 2px', backgroundColor:'darkGrey', color:'white'}}
    type="text"
    name="lastName"
    placeholder="Last Name"
    value={this.state.credentials.lastName}
    onChange={this.handleChange}
  />
  <input
  style = {{ borderRadius:'4%', width:'400px', height:'53px', textIndent: '30px', marginLeft:'40%', border:'grey solid 2px', backgroundColor:'darkGrey', color:'white'}}
    type="text"
    name="email"
    placeholder="Email"
    value={this.state.credentials.email}
    onChange={this.handleChange}
  />
  <input
  style = {{ borderRadius:'4%', width:'400px', height:'53px', textIndent: '30px', marginLeft:'40%', border:'grey solid 2px', backgroundColor:'darkGrey', color:'white'}}
    type="password"
    name="password"
    placeholder="password"
    value={this.state.credentials.password}
    onChange={this.handleChange}
  />
  <input
  style = {{ borderRadius:'4%', width:'400px', height:'53px', textIndent: '30px', marginLeft:'40%', border:'grey solid 2px', backgroundColor:'darkGrey', color:'white'}}
    type="text"
    name="phone"
    placeholder= "phone number"
    value={this.state.credentials.phone}
    onChange={this.handleChange}
  />
  <button onClick={(e)=> this.register(e)} style = {{backgroundColor: 'red', borderRadius: '2%', margin: '2%' , color:'white' }}>
   Sign Up
  </button>

</form> 
</div>  
    
        )
    }
}

const RegisterRouter = withRouter(Register);

const mapStateToProps = state => ({
  error: state.error,
  register: state.register
});


export default connect(
  mapStateToProps,
  { register }
)(RegisterRouter);
