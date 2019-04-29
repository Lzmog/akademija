import {combineReducers} from 'redux';
import logReducer from './logReducer';
import movieReducer from './movieReducer';
import genreReducer from './genreReducer';


export default combineReducers({
    genre: genreReducer,
    movie: movieReducer,
    log: logReducer,
});
