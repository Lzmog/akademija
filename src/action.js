export const setGenresList = (list) => ({
    type: 'SET_GENRES_LIST',
    list
});

export const setMoviesList = (list) => ({
    type: 'SET_MOVIES_LIST',
    list
});

export const setLogList = (list) => ({
    type: 'SET_LOG_LIST',
    list
});

export const setHeart = (movieId) => ({
    type: 'SET_HEART',
    movieId
});

export const unsetHeart = (movieId) => ({
    type: 'UNSET_HEART',
    movieId
});

export const setActiveGenre = (activeGenre) => ({
    type: 'SET_ACTIVE_GENRE',
    activeGenre
});