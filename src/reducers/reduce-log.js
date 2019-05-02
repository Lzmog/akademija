const initialState = {
    logs: [],
}


export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOG_LIST':
            return {...state, logs: [...state.logs, action.log]}
        default:
            return state;
    }
}