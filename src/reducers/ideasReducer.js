import { 
  RECEIVE_FETCH_IDEAS,
  RECEIVE_UPDATE_IDEA,
  RECEIVE_NEW_IDEA,
  RECEIVE_DELETE_IDEA,
} from '../actions/types';

const INITIAL_STATE = { all: [] };

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case RECEIVE_FETCH_IDEAS:
      return {...state, all: action.payload}

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

    case RECEIVE_NEW_IDEA:
      return {...state, all: state.all.concat(action.payload)}
      
    case RECEIVE_DELETE_IDEA:
      return {...state, all: state.all.filter(idea => idea.id != action.payload.deletedId)}

    default:
      return state
  }
};