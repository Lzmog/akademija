const initialState = {
    list: [],
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case "set_movies":
            return {
                ...state,
                list: action.list,
            };

        default: return state;
    }
};

export default (state = initialState, action) => {
    movie: movieReducer(state, action)
};
