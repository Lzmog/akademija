import {setLog} from "../thunks/getLog";

export const setGenreList = (genre) => ({
    type: "set_genre",
    genre,
});

export const setGenre = (id, title) => ({
    return: function (dispatch) {
        dispatch(setLog(`Genre: ${title}`));

        dispatch({
            type: "set_active_genre",
            id
        })
    }
});
