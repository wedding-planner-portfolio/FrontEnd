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
      userId: 1,
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
      <div className="container container-fluid">
        <form onSubmit={this.addService}>
          <input
            onChange={this.handleInputChange}
            placeholder="Theme"
            value={this.state.theme}
            name="theme"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Price"
            value={this.state.pricing}
            name="pricing"
          />
          <input
            type="text"
            onChange={this.handleInputChange}
            placeholder="Image"
            value={this.state.imgURL}
            name="imageURL"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Location"
            value={this.state.location}
            name="location"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Description"
            value={this.state.description}
            name="description"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Features"
            value={this.state.features}
            name="features"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Vendors"
            value={this.state.vendors}
            name="vendors"
          />
          <button onClick={e => this.addService(e)} className="btn btn-primary">Add Wedding Post</button>
        </form>

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
