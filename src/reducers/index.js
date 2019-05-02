import {combineReducers} from "redux";
import GenreReducer from './reduce-genres';
import MovieReducer from './reduce-movie';
import LogReducer from './reduce-log';

const allReducers = combineReducers({
    genres: GenreReducer,
    movies: MovieReducer,
    logs: LogReducer
})

export default allReducers;