import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,

  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,

  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,

  FETCH_SERVICE_START,
  FETCH_SERVICE_SUCCESS,
  FETCH_SERVICE_FAILURE,

  DELETE_SERVICE_START,
  DELETE_SERVICE_SUCCESS,
  DELETE_SERVICE_FAILURE,
}
from '../actions';

const initialState = {
    error: '',
    fetchingData: false,
    loggingIn: false,
    register: false,
    savingService:false,
    services:[],
    user: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case LOGIN_START:
      return {
        ...state,
        error: '',
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: '',
        user: action.payload
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        loggingIn: false,
      };

    case REGISTER_START:
      return {
        ...state,
        error: '',
        register: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        register: false,
        error: '',
        success: ''
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload,
        register: false,
      };

    case FETCH_DATA_START:
      return {
        ...state,
        error: '',
        fetchingData: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        services: action.payload,
        error: ''
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        fetchingData: false,
        error: action.payload
      };

    case FETCH_SERVICE_START:
      return {
        ...state,
        error: '',
        savingService: true
      };
    case FETCH_SERVICE_SUCCESS:
      return {
        ...state,
        savingService: false,
        services: action.payload,
        error: ''
      };
    case FETCH_SERVICE_FAILURE:
      return {
        ...state,
        savingService: false,
        error: action.payload
      };

    case DELETE_SERVICE_START:
      return {
        ...state,
        error: '',
        deleteService: true
      };
    case DELETE_SERVICE_SUCCESS:
      return {
        ...state,
        deleteService: false,
        services: action.payload,
        error: ''
      };
    case DELETE_SERVICE_FAILURE:
      return {
        ...state,
        deleteService: false,
        error: action.payload
      };

    default:
      return state;
    }
  };
            
export default reducer;