import React from 'react';
import './App.css';
import PostPage from './components/PostPage';
import { BrowserRouter as Router, Route, Link , NavLink} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Register from './components/Register';
import CreatePostsPageForm from './components/CreatePostsPageForm';
function App() {
  return (
    
    
    <Router>
    <div className="App">


<div style={{display:'flex', marginTop:'2%'}}>

    <Route path="/postpage"   component={PostPage}  />
      <nav style={{marginLeft:'20%'}}>
        <NavLink style={{textDecoration:'none', color:'red', fontFamily:'courgie', fontSize: '30px', }} exact to='/postpage'>

        Homepage
        </NavLink>

<NavLink style={{textDecoration:'none', color:'red', fontFamily:'courgie', fontSize: '30px',margin:'5%'}} exact to=  '/login'>
Login
</NavLink>
<NavLink style={{textDecoration:'none', color:'red', fontFamily:'courgie', fontSize: '30px',  }} to =   '/register'>
  Register
</NavLink>
          </nav>
</div>
          <Route exact path = "/register" component = {Register}  />
            <Route exact path = '/login' component = {Login} />

        
          <PrivateRoute exact path="/protected" component= {CreatePostsPageForm} />
       
      </div>
    </Router>
  );
}

export default App;
