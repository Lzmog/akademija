const initialState = {
    list: [],
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MOVIE_LIST':
            return {
                ...state,
                list: action.list,
            };

        default: return state;
    }
};

export default (state, action) => {
    movie: movieReducer
};
