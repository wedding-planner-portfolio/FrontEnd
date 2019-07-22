import React, { Component } from 'react';
import HomePage from './HomePage';
import {getData, deleteService, update} from '../actions';
import { connect } from 'react-redux';
// import SearchBar from './SearchBar';

export class ProfilePage extends Component {
  componentDidMount() {
    this.props.getData()
  }

  render() {
    console.log("This is where props is", this.props.services);
    return (
      <div className="container">
        <div className="card-group">
          {this.props.services.map(service => {
            return (
              <div>
                <HomePage key={service.id} service={service} deleteService={this.props.deleteService} update={this.props.update} />
              </div>
            );
          })} 
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  services: state.services,
  fetchingData: state.fetchingData,
  user: state.user
});

export default connect(
  mapStateToProps,
  { getData, deleteService, update }
)(ProfilePage)
