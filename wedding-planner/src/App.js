import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostPage from './components/PostPage';
import { BrowserRouter as Router, Route, Link , NavLink} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    
    
    <Router>
    <div className="App">
      <nav>
        <NavLink to='/postpage'>

        Homepage
        </NavLink>

<NavLink to=  '/protected'>
Login
</NavLink>
<NavLink to =   '/register'>
  Sign Up
</NavLink>
          </nav>




        <Route path = "/register" component = {Register}  />
          <PrivateRoute  path="/protected" component= {Login} />
        <Route path="/postpage"   component={PostPage}  />
      </div>
    </Router>
  );
}

export default App;
