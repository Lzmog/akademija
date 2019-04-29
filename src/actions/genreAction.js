import {setLog} from "../thunks/getLog";

export const setGenreList = (genre) => ({
    type: "genre",
    genre,
});

export const setGenre = (id, title) => ({
    return: function (dispatch) {
        dispatch(setLog(`Genre: ${title}`));

        dispatch({
            type: "set_genre",
            id
        })
    }
});
