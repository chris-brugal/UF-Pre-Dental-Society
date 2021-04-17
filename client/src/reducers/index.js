import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import officerReducer from './officerReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
    event: eventReducer,
    officer: officerReducer,
    auth: authReducer,
    error: errorReducer
});