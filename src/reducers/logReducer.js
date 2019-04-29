const initialState = {
    list: [],
};

const logReducer = (state = initialState, action) => {
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
    log: logReducer
};
