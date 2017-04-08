export default (state = {title: 'Lorem'}, action) => {
    switch (action.type) {
        case 'UPDATE_TITLE':
            state.title = action.title;
            return state;
        default:
            return state
    }
}