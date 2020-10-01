const defaultState = {
    user: null,
    loggedIn: false
}

function userReducer(prevState = defaultState, action) {
    switch(action.type) {
        default:
            return prevState;
    }
}

export default userReducer;