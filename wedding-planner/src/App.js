import React from 'react';
import './App.css';
import PostPage from './components/PostPage';
import { BrowserRouter as Router, Route , NavLink} from 'react-router-dom';
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
<section style = {{}}>
<h1 style ={{fontSize:'60px' , color:'white', fontFamily:'cursive', opacity:'.5'}}>Wedding PlannerGram</h1>
<p style ={{fontSize:'30px' , color:'white', fontFamily:'cursive', opacity:'.5', width:'400px', height:'400px', marginLeft:'30%'}}>Let us help you plan your wedding and make that special day stress free in order to create happy lasting memories with your significant other</p>
          <Route exact path = "/register" component = {Register}  />
            <Route exact path = '/login' component = {Login} />
</section>
        
          <PrivateRoute exact path="/protected" component= {CreatePostsPageForm} />
       
      </div>
    </Router>
  );
}

export default App;
