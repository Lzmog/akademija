const initialState = {
    log: [],
};

const logReducer = (state = initialState, action) => {
    switch (action.type) {
        case "set_log":
            return {
                ...state,
                log: [...state.log, action.log]
            };

        default: return state;
    }
};

export default (state = initialState, action) => {
    log: logReducer(state, action)
};
