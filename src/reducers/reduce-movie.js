const initialState = {
    list: [],
    heartMovies: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MOVIES_LIST':
            return {...state, list: action.list};
        case 'SET_HEART':
            const heatedMovies = [...state.heartMovies, action.movieId];
            const uniqueHeart = [...new Set(heatedMovies)];
            return {...state, heartMovies: uniqueHeart};
        case 'UNSET_HEART':
            const hearted = state.heartMovies.filter(item => item !== action.movieId);
            return {...state, heartMovies: hearted};
        default:
            return state;
    }
}
