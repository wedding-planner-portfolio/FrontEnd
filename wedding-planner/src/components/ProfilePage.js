import React, { Component } from 'react';
import HomePage from './HomePage';
import {getData, deleteService} from '../actions';
import { connect } from 'react-redux';
// import SearchBar from './SearchBar';

// const services = [
//   {
//     id: 1,
//     name: 'Vivians Masquerade',
//     price: '$300',
//     location: 'NY',
//     imgUrl:'https://images.crateandbarrel.com/is/image/Crate/PryceChampagneNiceBucketSHF17/?$web_product_hero$&170720153245&wid=625&hei=625',
//     theme:'Champagne and Diamonds',
//     description:'Sleek and modern with a hint of traditional'
//   },
//   {
//     id: 2,
//     name: 'Ambers Divine Touch',
//     price: '$300',
//     location: 'Utah',
//     imgUrl:'https://s3.amazonaws.com/homestratosphere/wp-content/uploads/2016/05/26173753/41-colorful-garden.jpg',
//     theme:'Oranges and sweet petunias',
//     description:'Warm and festive for a time you will never forget'
//   },
//   {
//     id: 3,
//     name: 'Crystals',
//     price: '$300',
//     loation: 'California',
//     imgUrl: 'https://www.traditionslighting.com/wp-content/uploads/2017/03/slide_376472_4431440_free.jpg',
//     theme:'Blue Crystals and Diamonds',
//     description:'Chic and woodsy event in the evening breeze'
//   }


// ]





export class ProfilePage extends Component {



componentDidMount(){
this.props.getData()

}

    render() {
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
              <HomePage key={service.id} service={service} />

              
               

              <button onClick={() => this.props.deleteService(service.id)}>
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
    fetchingData: state.fetchingData,
    user: state.user
  });
  
  export default connect(
    mapStateToProps,
    { getData, deleteService }


  )(ProfilePage)
