import React, { Component } from 'react'

export class HomePage extends Component {
    render() {
        return (
            <div style ={{color:'red', fontSize: '30px',}} >

            <section>
           <strong>Name:</strong> {this.props.service.name}
           </section>
           <section>
             <img
             style={{width:'300px', height:'300px'  }}
        src= {this.props.service.imageURL}
        alt={this.props.service.name}
        
        />
           </section>
           <section>
           <strong>Theme:</strong> {this.props.service.theme}
           </section>
           <section>
     {this.props.service.description}
           </section>
           <section>
     {this.props.service.location}
           </section>
        
                <section>

                 {this.props.service.vendors}   
                </section>
            </div>
        )
    }
}

export default HomePage
