import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {register} from '../actions';

export class Register extends Component {
  state = {
    credentials: {
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
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-4">
            <h1>Register</h1>
            <form onSubmit={this.register} className="d-flex flex-column">  
              <input
                type="text" name="firstName" placeholder="First Name"
                value={this.state.credentials.firstName}
                onChange={this.handleChange}
                className="wp-input"
              />
              <input
                type="text" name="lastName" placeholder="Last Name"
                value={this.state.credentials.lastName}
                onChange={this.handleChange}
                className="wp-input"
              />
              <input
                type="text" name="email" placeholder="Email"
                value={this.state.credentials.email}
                onChange={this.handleChange}
                className="wp-input"
              />
              <input
                type="password" name="password" placeholder="Password"
                value={this.state.credentials.password}
                onChange={this.handleChange}
                className="wp-input"
              />
              <input
                type="text" name="phone" placeholder= "Phone Number"
                value={this.state.credentials.phone}
                onChange={this.handleChange}
                className="wp-input"
              />
              <button onClick={(e)=> this.register(e)} className="btn btn-primary">Sign Up</button>
            </form> 
          </div>
        </div>
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
