export default (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES_LIST':
            return {...state, list: action.list};
        default:
            return state;
    }
}