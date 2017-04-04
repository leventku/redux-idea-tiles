import { combineReducers } from 'redux';

import ideasReducer from './ideasReducer';

const rootReducer = combineReducers({
  ideas: ideasReducer
});

export default rootReducer;
