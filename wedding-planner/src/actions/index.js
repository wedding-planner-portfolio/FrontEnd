import { customAuth } from '../utils/authenticator';
// import axios from 'axios';
// import { publicDecrypt } from 'crypto';
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return customAuth()
    .post('https://wedding-planner-build-week.herokuapp.com/auth/login', creds)
    .then(res => {
      console.log(res.data);
      if(res.data.authToken){
      localStorage.setItem('token', res.data.authToken);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      }
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOGIN_FAILURE })
    })
};

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  customAuth()
    .get("https://wedding-planner-build-week.herokuapp.com/api/post")
    .then(res => { 
        console.log("actions log :", res.data)
 dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data});
    })
    .catch(err => {
      console.log(err.response);
      dispatch({ type: FETCH_DATA_FAILURE, payload: err });
    });
};


export const FETCH_SERVICE_START = 'FETCH_SERVICE_START';
export const FETCH_SERVICE_SUCCESS = 'FETCH_SERVICE_SUCCESS';
export const FETCH_SERVICE_FAILURE = 'FETCH_SERVICE_FAILURE';
export const getService = (service) => dispatch => {
  console.log(service);
  dispatch({ type: FETCH_SERVICE_START });
  customAuth()
      .post("https://wedding-planner-build-week.herokuapp.com/api/post", service)
      .then(res => { 
        console.log("actions log for adding a service :", res)
        dispatch({ type: FETCH_SERVICE_SUCCESS, payload: res.data});
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: FETCH_SERVICE_FAILURE, payload: err });
      });
  };


export const DELETE_SERVICE_START = 'DELETE_SERVICE_START';
export const DELETE_SERVICE_SUCCESS = 'DELETE_SERVICE_SUCCESS';
export const DELETE_SERVICE_FAILURE = 'DELETE_SERVICE_FAILURE';
export const deleteService = (id) => dispatch => {
  
  dispatch({ type: DELETE_SERVICE_START });
  customAuth()
    .delete(`https://wedding-planner-build-week.herokuapp.com/api/post/${id}`)
    .then(res => { 
      console.log("actions log :",res.data)
      dispatch({ type: DELETE_SERVICE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: DELETE_SERVICE_FAILURE, payload: err });
    });
};

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const register = creds => dispatch => {
  console.log("creds from action log", creds )
  dispatch({ type: REGISTER_START });
  return customAuth()
    .post('https://wedding-planner-build-week.herokuapp.com/auth/register', creds)
    .then(res => {
      // if(res.data.authToken){
        // localStorage.setItem('token', res.data.authToken);
console.log("register action",res)
     dispatch({ type: REGISTER_SUCCESS });
        // }
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: REGISTER_FAILURE})
      })
      .catch(err => console.log(err.response));
  };





//       if(creds){
//       localStorage.setItem('token', res.data.payload)};
//       dispatch({ type: REGISTER_SUCCESS, payload:res.data.authToken});
//       return true;
//     })
//     .catch(err => console.log(err.response));
// };

export const UPDATE_POST_START = 'UPDATE_POST_START';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';
export const  update = updatedPost=> dispatch => {
  console.log("actions log from post action",updatedPost);
dispatch({type: UPDATE_POST_START });
return customAuth()
.put(`https://wedding-planner-build-week.herokuapp.com/api/post/${updatedPost.id}`, updatedPost)
.then(res => {
  dispatch({type:UPDATE_POST_SUCCESS, payload: res.data});
  return true;
})
.catch(err => console.log(err));
};







