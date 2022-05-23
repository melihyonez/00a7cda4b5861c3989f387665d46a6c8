import { combineReducers } from 'redux';
import appConfigReducer from './appConfig';
// import initReducer from './init';

const rootReducer = combineReducers({
  appConfig: appConfigReducer,
  // init: initReducer,
});

export default rootReducer;
