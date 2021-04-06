import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import officerReducer from './officerReducer';

export default combineReducers({
    event: eventReducer,
    officer: officerReducer
});