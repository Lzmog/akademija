const initialState = {
    list: [],
    activeGenre: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_GENRES_LIST':
            return {...state, list: action.list};
        case 'SET_ACTIVE_GENRE':
            return {...state, activeGenre: action.activeGenre};
        default:
            return state;
    }
}