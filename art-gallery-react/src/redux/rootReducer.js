import { combineReducers } from 'redux';
import pictureReducer from './pictureReducer';
import filterReducer from './filterReducer';
import signupReducer from './signup/signupReducer'

const rootReducer = combineReducers({
    picture: pictureReducer,
    filter: filterReducer,
    signup: signupReducer,
});

export default rootReducer;