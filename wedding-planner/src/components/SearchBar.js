import React, { Component } from "react";

export class SearchBar extends Component {
  state = {
    search:''
  }

  onSearchChange = event => {
    this.setState({ 
      search: {
      ...this.state.search,
      [event.target.name]:event.target.value
      }
    })
  }
    
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="p-3">
            <div className="searchBar">
              {/* <div>
                <img className="camera" src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Instagram_font_awesome.svg" alt="camera" />
                <i id="gps" className="fas fa-location-arrow" />
                <img id="heart" className="heart" src="https://upload.wikimedia.org/wikipedia/commons/8/87/Line-style-icons-heart.svg" alt="heart" />
                <i id="user" className="far fa-user" />
                <h6>|</h6>
                <h5>Wedding </h5>
                <h2>Planners</h2>
              </div> */}
              <form size="lg"> 
                <input type="search" placeholder="Search for posts" onChange={this.onSearchChange} />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
