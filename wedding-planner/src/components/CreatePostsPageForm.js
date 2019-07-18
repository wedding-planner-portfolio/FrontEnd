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
      <div style={{ marginTop: "20%" }}>
        <form onSubmit={this.addService}>
          <input
            style={{
              borderRadius: "4%",
              width: "400px",
              height: "53px",
              textIndent: "30px",
              marginLeft: "40%",
              border: "grey solid 2px",
              backgroundColor: "darkGrey",
              color: "white"
            }}
            onChange={this.handleInputChange}
            placeholder="features"
            value={this.state.features}
            name="features"
          />
          <input
            style={{
              borderRadius: "4%",
              width: "400px",
              height: "53px",
              textIndent: "30px",
              marginLeft: "40%",
              border: "grey solid 2px",
              backgroundColor: "darkGrey",
              color: "white"
            }}
            onChange={this.handleInputChange}
            placeholder="price"
            value={this.state.pricing}
            name="pricing"
          />
          <input
            style={{
              borderRadius: "4%",
              width: "400px",
              height: "53px",
              textIndent: "30px",
              marginLeft: "40%",
              border: "grey solid 2px",
              backgroundColor: "darkGrey",
              color: "white"
            }}
            onChange={this.handleInputChange}
            placeholder="theme"
            value={this.state.theme}
            name="theme"
          />
          <input
            style={{
              borderRadius: "4%",
              width: "400px",
              height: "53px",
              textIndent: "30px",
              marginLeft: "40%",
              border: "grey solid 2px",
              backgroundColor: "darkGrey",
              color: "white"
            }}
            type="text"
            onChange={this.handleInputChange}
            placeholder="image Url"
            value={this.state.imgURL}
            name="imageURL"
          />
          <input
            style={{
              borderRadius: "4%",
              width: "400px",
              height: "53px",
              textIndent: "30px",
              marginLeft: "40%",
              border: "grey solid 2px",
              backgroundColor: "darkGrey",
              color: "white"
            }}
            onChange={this.handleInputChange}
            placeholder="location"
            value={this.state.location}
            name="location"
          />
          <input
            style={{
              borderRadius: "4%",
              width: "400px",
              height: "53px",
              textIndent: "30px",
              marginLeft: "40%",
              border: "grey solid 2px",
              backgroundColor: "darkGrey",
              color: "white"
            }}
            onChange={this.handleInputChange}
            placeholder="description"
            value={this.state.description}
            name="description"
          />
          <input
            style={{
              borderRadius: "4%",
              width: "400px",
              height: "53px",
              textIndent: "30px",
              marginLeft: "40%",
              border: "grey solid 2px",
              backgroundColor: "darkGrey",
              color: "white"
            }}
            onChange={this.handleInputChange}
            placeholder="vendors"
            value={this.state.vendors}
            name="vendors"
          />
          <button
            style={{
              backgroundColor: "red",
              borderRadius: "2%",
              margin: "2%",
              color: "white"
            }}
            onClick={e => this.addService(e)}
          >
            Add Service
          </button>
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
