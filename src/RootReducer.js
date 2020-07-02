import {combineReducers} from 'redux';
import gameReducer from './game/GameReducer';

// combines all reducers to single state
const AppReducers = combineReducers({
  gameReducer
});

const rootReducer = (state, action) => {
  return AppReducers(state, action);
};

export default rootReducer;
