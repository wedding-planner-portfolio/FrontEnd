import React from 'react';
import { BrowserRouter as Router, Route , NavLink} from 'react-router-dom';

export default function LandingPage() {
   return (
      <div>
         <section className="section p-5 mt-5 mb-5">
          <div className="container mt-5 mb-5 d-flex flex-column align-items-center">
            <img src="https://github.com/wedding-planner-portfolio/ui/blob/master/img/weddingplannerlogo.png?raw=true" alt=""/>
            <h1 className="text-center mt-4 mb-2 wp-heading">Wedding Planner</h1>
            <p className="text-center p-3">In need of ideas for your one special day? Look no further!
                <br />Find inspiration and contact the best wedding planners for your wedding!
            </p>
            <div className="row mt-3 mb-3">
                <div className="col-lg-6 d-flex justify-content-center"> 
                  <NavLink exact to='/login' className="btn btn-primary p-4 m-1 wp-btn-explore text-white">Login</NavLink>
                </div>
                <div className="col-lg-6 d-flex justify-content-center">
                  <NavLink to='/register' className="btn btn-secondary p-4 m-1 wp-btn-login text-white">Register</NavLink>
                </div>
            </div>
          </div>
        </section>

        <section id="aboutus" class="section pt-3 pb-5 mt-5">
            <div class="container mt-5 pb-5">
              <div class="about-title text-center mb-3">ABOUT US</div>
              <div class="card-group">
                <div class="card">
                  <img src="https://github.com/wedding-planner-portfolio/ui/blob/master/img/morgan.png?raw=true" class="about-img" />
                  <div class="card-body">
                    <h5 class="card-title">Morgan Peterson</h5>
                    <p class="card-subtitle">Front End</p>
                  </div>
                </div>

                <div class="card">
                  <img src="https://github.com/wedding-planner-portfolio/ui/blob/master/img/alan.png?raw=true" class="about-img" />
                  <div class="card-body">
                    <h5 class="card-title">Alan Lemasney</h5>
                    <p class="card-subtitle">Front End</p>
                  </div>
                </div>

                <div class="card">
                  <img src="https://github.com/wedding-planner-portfolio/ui/blob/master/img/ronny.png?raw=true" class="about-img" />
                  <div class="card-body">
                    <h5 class="card-title">Ronny Alvarado</h5>
                    <p class="card-subtitle">Back End</p>
                  </div>
                </div>

                <div class="card">
                  <img src="https://github.com/wedding-planner-portfolio/ui/blob/master/img/edgar.png?raw=true" class="about-img" />
                  <div class="card-body">
                      <h5 class="card-title">Edgar Flores</h5>
                      <p class="card-subtitle">Back End</p>
                  </div>
                </div>
              </div>
            </div>
        </section>

      </div>
   )
}