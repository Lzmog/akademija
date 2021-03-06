import axios from 'axios';
import {endpoints} from '../../config';
import {setMovies} from '../actions/movieAction';
import {setLogAction} from "../actions/logAction";

export const getMovie = () => (dispatch) => {
    const log = dispatch(setLogAction('Movie'));

    const movieList = axios
        .get(endpoints.mostPopularMovies())
        .then((res) => dispatch(setMovies(res.data.results)))
        .catch((error) => console.log(error));
    return movieList, log;
};
