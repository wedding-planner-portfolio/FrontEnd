import React, { Component } from "react";

export class SearchBar extends Component {

state = {
search:''


}
  onSearchChange = event => {
    
    
    this.setState({ search:{
      ...this.state.search,
      [event.target.name]:event.target.value
      }
    
    })
    
  }
    

  render() {
   

    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text center">
            <div className="searchBar" style={{  display: "flex",}}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft:'10%',
              
                }}
              >
                <img
                  style={{ width: "30px", height: "30px", color:'white'}}
                  className="camera"
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Instagram_font_awesome.svg"
                  alt="camera"
                />
                 <i id="gps" className="fas fa-location-arrow" />
            <img
            style={{ width: "30px", height: "30px", marginLeft:'1%' , color:'white'}}
              id="heart"
              className="heart"
              src="https://upload.wikimedia.org/wikipedia/commons/8/87/Line-style-icons-heart.svg"
              alt="heart"
            />
            <i id="user" className="far fa-user" />
                <h6 style={{marginLeft:' 1%', marginRight: '2%', fontSize:'30px'}} >|</h6>
                <h5 style={{ fontFamily: "courgie", color:'red', fontSize:'30px'}}>Wedding </h5>
                <h2 style={{color:'white'}}>Planners</h2>
              </div>
              <form size="lg"> 
                <input
              
                style = {{ borderRadius:'4%', width:'400px', height:'53px', textIndent: '30px', marginLeft:'40%', border:'grey solid 2px', backgroundColor:'darkGrey', color:'white'}}
                  type="search"
                  placeholder="searh for posts"
                  
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
