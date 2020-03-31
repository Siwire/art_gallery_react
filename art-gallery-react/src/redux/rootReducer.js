import { combineReducers } from 'redux';
import pictureReducer from './reducer';

const rootReducer = combineReducers({
    picture: pictureReducer
});

export default rootReducer;