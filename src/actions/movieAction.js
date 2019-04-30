import {setLog} from "../thunks/getLog";
import {applyMiddleware as dispatch} from "redux";

export const setMovies = (movies) => ({
    type: "set_movies",
    movies,
});

export const setLike = (id, title) => {
    dispatch(setLog(`You like ${title}`));
    dispatch({
        type: "set_like",
        id
    });
};

export const setUnlike = (id, title) => {
    dispatch(setLog(`You don't like ${title}`));
    dispatch({
        type: "set_unlike",
        id
    });
};
