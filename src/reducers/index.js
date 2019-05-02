import {combineReducers} from "redux";
import GenreReducer from './reduce-genres';
import MovieReducer from './reduce-movie';

const allReducers = combineReducers({
    genres: GenreReducer,
    movies: MovieReducer
})

export default allReducers;