import { FETCH_IDEAS, CREATE_IDEA, DELETE_IDEA } from '../actions';

const INITIAL_STATE = { all: [] };

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_IDEAS:
      return {...state, all: action.payload}
    case CREATE_IDEA:
      return {...state, all: state.all.concat(Object.assign({title: '', body: ''}, action.payload))}
    case DELETE_IDEA:
     console.log('delete!!!')
      return {...state, all: state.all.filter(idea => idea.id != action.payload)}

    default:
      return state
  }
};