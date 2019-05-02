export const setGenresList = (list) => ({
    type: 'SET_GENRES_LIST',
    list
});

export const setMoviesList = (list) => ({
    type: 'SET_MOVIES_LIST',
    list
});

export const setLogList = (log) => ({
    type: 'SET_LOG_LIST',
    log
});

export const setHeart = (movieId,title) => (dispatch) => {
    dispatch(setLogList(title));
    dispatch({
        type: 'SET_HEART',
        movieId
    });
}

export const unsetHeart = (movieId,title) => (dispatch) => {
    dispatch(setLogList(title));
    dispatch({
        type: 'UNSET_HEART',
        movieId
    });
}

export const setActiveGenre = (activeGenre, name) => (dispatch) => {
    dispatch(setLogList(name));
    dispatch({
        type: 'SET_ACTIVE_GENRE',
        activeGenre
    });
}