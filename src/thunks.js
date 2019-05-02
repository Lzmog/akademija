import axios from 'axios';
import {endpoints} from '../config';
import {setGenresList, setMoviesList, setHeartedList, setLogList } from './action';

export const getGenreList = () => (dispatch) => {
    axios
        .get(endpoints.genres())
        .then((res) => dispatch(setGenresList(res.data.genres)))
        .catch((error) => console.log(error));

    const log = dispatch(setLog("Display movie list"))
};

export const getMoviesList = () => (dispatch) => {
    axios
        .get(endpoints.mostPopularMovies())
        .then((res) => dispatch(setMoviesList(res.data.results)))
        .catch((error) => console.log(error));

    const log = dispatch(setLog("Display genre list"))
};

export const setLog = (msg) => (dispatch) => {
    const log = dispatch (setLogList(msg));
    return msg;
};

