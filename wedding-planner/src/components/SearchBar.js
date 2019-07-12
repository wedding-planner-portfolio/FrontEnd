import React, { Component } from "react";

export class SearchBar extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto mt-5 text center">
            <div className="searchBar">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  
                }}
              >
                <img
                  style={{ width: "20px", height: "20px" }}
                  className="camera"
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Instagram_font_awesome.svg"
                  alt="camera"
                />
                 <i id="gps" className="fas fa-location-arrow" />
            <img
            style={{ width: "20px", height: "20px", marginLeft:'1%' }}
              id="heart"
              className="heart"
              src="https://upload.wikimedia.org/wikipedia/commons/8/87/Line-style-icons-heart.svg"
              alt="heart"
            />
            <i id="user" className="far fa-user" />
                <h6 style={{marginLeft:' 1%', marginRight: '2%'}} >|</h6>
                <h5 style={{ fontFamily: "courgie" }}>Wedding Planners</h5>
              </div>
              <form>
                <input
                  type="search"
                  placeholder="searh for posts"
                  className="form-control"
                  onChange={this.onSearchChange}
                />
              </form>
            </div>

           
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
