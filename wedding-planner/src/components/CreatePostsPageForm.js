import React, { Component } from "react";
import { connect } from "react-redux";
// import axios from 'axios';
import { getService } from '../actions';
import ProfilePage from "./ProfilePage";

class AddServiceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: "",
      userId: 2,
      pricing: "",
      theme: "",
      imageURL: "",
      location: "",
      description: "",
      vendors: ""
    };
  }

  addService = e => {
    console.log("log from create post page");
    e.preventDefault();
    const service = {
      userId: this.state.userId,
      imageURL: this.state.imageURL,
      description: this.state.description,
      location: this.state.location,
      theme: this.state.theme,
      pricing: this.state.pricing,
      features: this.state.features,
      vendors: this.state.vendors
    };
    this.props.getService(service);
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="container container-fluid d-flex flex-column align-items-center">
        <div className="col-lg-5">
          <form onSubmit={this.addService} className="d-flex flex-column p-3">
            <input
              onChange={this.handleInputChange}
              placeholder="Theme"
              value={this.state.theme}
              name="theme"
              className="wp-create-input"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="Price"
              value={this.state.pricing}
              name="pricing"
              className="wp-create-input"
            />
            <input
              type="text"
              onChange={this.handleInputChange}
              placeholder="Image"
              value={this.state.imgURL}
              name="imageURL"
              className="wp-create-input"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="Location"
              value={this.state.location}
              name="location"
              className="wp-create-input"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="Description"
              value={this.state.description}
              name="description"
              className="wp-create-input"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="Features"
              value={this.state.features}
              name="features"
              className="wp-create-input"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="Vendors"
              value={this.state.vendors}
              name="vendors"
              className="wp-create-input"
            />
            <button onClick={e => this.addService(e)} className="btn btn-primary">Add Wedding Post</button>
            </form>
        </div>
      
        <ProfilePage />
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
  { getService }
)(AddServiceForm);
