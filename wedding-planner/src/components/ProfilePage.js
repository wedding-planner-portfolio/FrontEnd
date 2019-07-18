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
      <div>
          {this.props.services.map(service => {
            return (
              <div
                style={{
                  borderTop: "solid 4px pink ",
                  borderBottom: "solid 4px purple ",
                  marginTop: "20%",
                  maxWidth: "7000px",
                  width: "auto",
                  height: "500px",
                  backgroundRepeat: "noRepeat",
                  backgroundSize: "cover",
                  backgroundColor: "teal",
                  opacity: ".7",
                  scrollBehavior: "smooth"
                }}
              >
                <HomePage key={service.id} service={service} deleteService={this.props.deleteService} update={this.props.update} />
              </div>
            );
        })} 
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
