import {
  GET_JOKE,
  GET_JOKE_FAILED,
  GET_JOKE_SUCCESS,
  START_POLL,
  STOP_POLL
} from './actions';

const initialState = {
  loading: false,
  error: false,
  joke: '',
  isPolling: false
}

export default rootReducer = (state = initialState, { type, payload}) => {
  switch(type){
    case GET_JOKE:
      return{
        ...state,
        loading: true,
        error: false
      }
    case GET_JOKE_SUCCESS:
      return{
        ...state,
        loading: false,
        joke: payload.joke        
      }
    case GET_JOKE_FAILED:
      return{
        ...state,
        loading: false,
        error: true
      } 
    case START_POLL:
      return{
        ...state,
        isPolling: true
      }
    case STOP_POLL:
      return{
        ...state,
        isPolling: false
      }
    default:
      return{
      ...state
    }
  }
}