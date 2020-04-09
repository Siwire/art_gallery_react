import { combineReducers } from 'redux';
import pictureReducer from './pictureReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
    picture: pictureReducer,
    filter: filterReducer
});

export default rootReducer;