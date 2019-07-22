import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { getService } from '../actions';
import { deleteService } from '../actions';
import { update} from '../actions';
// import axios from 'axios';

export class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      updatingService: false,
      savingService: false,
      deleteService: false,
      update: false,
      id: this.props.service.id,
      imageURL: this.props.service.imageURL,
      theme: this.props.service.theme,
      description: this.props.service.description,
      location: this.props.service.location,
      vendors: this.props.service.vendors
    }
  }

  handleInputChange = e => {
      this.setState({ [e.target.name]: e.target.value });
  };

  updatePost = async (event) => {
    const updatedPost = {
        id: this.state.id,
        imageURL: this.state.imageURL,
        theme: this.state.theme,
        description: this.state.description,
        location: this.state.location,
        vendors: this.state.vendors
    }
    event.preventDefault();
    await this.props.update(updatedPost);
    // this.setState({ update: this.state.update })
    this.setState(prevState => ({
      update: !prevState.update
    }));
  }

  edit = (event) => {
    event.preventDefault();
    this.setState(prevState => ({
      update:!prevState.update
    }));
  }



  render(){
    return (
      <div>
        {this.state.update ?
          <form onSubmit={this.updatePost}>
            <input  onChange={this.handleInputChange}
                    placeholder="imageURL"
                    value={this.state.imageURL}
                    name="imageURL"/>
            <input  onChange={this.handleInputChange}
                    placeholder="theme"
                    value={this.state.theme}
                    name="theme"/>
            <input  onChange={this.handleInputChange}
                    placeholder="description"
                    value={this.state.description}
                    name="description"/>
            <input  onChange={this.handleInputChange}
                    placeholder="location"
                    value={this.state.location}
                    name="location"/>
            <button type="submit">Finish Editing</button>
          </form> 
          : 
          <div>
            <strong>Wedding Planner:</strong> {this.props.service.firstName}{this.props.service.lastName}
            <img className="wp-post-img" src= {this.props.service.imageURL} alt={this.props.service.firstName}/>
            <strong>Price:</strong> {this.props.service.pricing}
            <strong>Theme:</strong> {this.props.service.theme}
            <strong>Description:</strong> {this.props.service.description}
            <strong>Location:</strong>{this.props.service.location}
            <strong>Vendors:</strong> {this.props.service.vendors}   
            <button onClick={() => this.props.deleteService(this.props.service.id)}>Delete</button>
            <button onClick={(event)=> this.edit(event)}>Edit</button>
          </div>
        }
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
  {  deleteService, update }
)(HomePage)
