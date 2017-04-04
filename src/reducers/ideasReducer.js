import { FETCH_IDEAS } from '../actions';

const INITIAL_STATE = { all: [], active: null };

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_IDEAS:
      return {...state, all: action.payload}
    default:
      return state
  }
};