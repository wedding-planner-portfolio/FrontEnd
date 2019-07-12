import React, { Component } from 'react';
import HomePage from './HomePage';
import {getData, deleteService} from '../actions';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';

export class PostPage extends Component {
    render() {
        return (
            <div>
              <SearchBar/>
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
              <HomePage key={service.id} service={service} />

              
               

              <button onClick={() => this.deleteService(service.id)}>
                Delete
              </button>
              </div>
          );
        })} 
            </div>
        )
    }
}

const mapStateToProps = state => ({
    services: state.services,
    fetchingData: state.fetchingData
  });
  
  export default connect(
    mapStateToProps,
    { getData, deleteService }


  )(PostPage)
