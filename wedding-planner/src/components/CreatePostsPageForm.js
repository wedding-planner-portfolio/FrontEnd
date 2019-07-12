import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import { getService } from '../actions';


class AddServiceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      id: undefined,
      price:'',
      theme:'',
      imgUrl: '',
      location: '',
      description: '',
      savingService: false,
      deleteService: false

    };
  }



addService = e => {
  e.preventDefault();
const service = this.state;
this.props.getService(service);

}

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    

    return (
      <div style={{marginTop:'20%'}}  >
        <form onSubmit={this.addService}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="price"
            value={this.state.price}
            name="price"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="theme"
            value={this.state.theme}
            name="style"
          />
          <input
            type="text"
            onChange={this.handleInputChange}
            placeholder="image Url"
            value={this.state.imgUrl}
            name="imgUrl"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="location"
            value={this.state.location}
            name="shipping"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="description"
            value={this.state.description}
            name="description"
          />
          <button onClick={(e)=>this.addService(e)}>Add Service</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  services: state.services,
  fetchingData: state.fetchingData,
  id: state.id
  });
  
  export default connect(
      mapStateToProps,
    { getService}
  )(AddServiceForm);