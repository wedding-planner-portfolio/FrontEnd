import React, { Component } from 'react';
import HomePage from './HomePage';
import {getData, deleteService} from '../actions';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import {Link} from 'react-router-dom'

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
      <div className="container">
        <div className="d-flex justify-content-between m-2">
          <SearchBar />
          <Link to='/protected' className="btn btn-secondary p-3">Create Post</Link>
        </div>
        <div className="card-group">
          {this.props.services.map(service => {
            return (
              <HomePage key={service.id} service={service}/>
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
  { getData, deleteService }
)(PostPage)
