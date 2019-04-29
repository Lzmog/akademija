import axios from 'axios';
import { endpoints } from '../../config';
import { setGenre } from '../actions/genreAction';
import {setLog} from "../actions/logAction";

export const getGenre = () => (dispatch) => {
    const log = dispatch(setLog('Genre List Loaded'));

    const movieList = axios
        .get(endpoints.genres())
        .then((res) => dispatch(setGenre(res.data.genres)))
        .catch((error) => console.log(error));
    return movieList, log;
};
