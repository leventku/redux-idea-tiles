import { 
  RECEIVE_IDEAS,
  FAILURE_IDEAS,

  RECEIVE_UPDATE_IDEA,
  FAILURE_UPDATE_IDEA,

  CREATE_IDEA,
  DELETE_IDEA } from '../actions';

const INITIAL_STATE = { all: [] };

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case RECEIVE_IDEAS:
      return {...state, all: action.payload}
    case FAILURE_IDEAS:
      return state;

    case RECEIVE_UPDATE_IDEA:
      return {all: state.all.map((item) => {
        if (item.id !== action.payload.id) {
          return item
        }
        return {
          ...item,
          ...action.payload
        }
      })}
    case FAILURE_UPDATE_IDEA:
      return state;


    case CREATE_IDEA:
      return {...state, all: state.all.concat(Object.assign({title: '', body: ''}, action.payload))}
    case DELETE_IDEA:
      return {...state, all: state.all.filter(idea => idea.id != action.payload)}

    default:
      return state
  }
};