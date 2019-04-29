const initialState = {
    list: [],
    activeGenre: null
};

const genreReducer = (state = initialState, action) => {
    switch (action.type) {
        case "set_genre":
            return {
                ...state,
                list: action.list,
            };

        case "set_active_genre":
            return {...state, activeGenre:action.id};

        default: return state;
    }
};

export default (state = initialState, action) => {
    genre: genreReducer(state, action)
};
