export default (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES_LIST':
            return {...state, list: action.list};
        default:
            return state;
    }
}