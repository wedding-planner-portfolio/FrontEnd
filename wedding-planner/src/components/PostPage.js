import React, { Component } from 'react';
import HomePage from './HomePage';
import {getData, deleteService} from '../actions';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';

export class PostPage extends Component {
  state = {
    search:''
  }

  componentDidMount() {
    this.props.getData()
  }

  render() {
    const filteredPosts = this.props.user.filter(post => {
      return post.userName.includes(this.state.search);
    });
    
    return (
      <div>
        <SearchBar/>
        {this.props.services.map(service => {
          return (
            <div>
              <HomePage key={service.id} service={service}/>
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
  { getData, deleteService }
)(PostPage)
