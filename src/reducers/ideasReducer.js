import { 
  RECEIVE_IDEAS,
  FAILURE_IDEAS,

  RECEIVE_UPDATE_IDEA,
  FAILURE_UPDATE_IDEA,

  RECEIVE_NEW_IDEA,
  FAILURE_NEW_IDEA,

  RECEIVE_DELETE_IDEA,
  FAILURE_DELETE_IDEA,
} from '../actions/types';

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

    case RECEIVE_NEW_IDEA:
      return {...state, all: state.all.concat(action.payload)}
    case FAILURE_NEW_IDEA:
      return state;
      
    case RECEIVE_DELETE_IDEA:
      return {...state, all: state.all.filter(idea => idea.id != action.payload.id)}
    case FAILURE_DELETE_IDEA:
      return state;

    default:
      return state
  }
};