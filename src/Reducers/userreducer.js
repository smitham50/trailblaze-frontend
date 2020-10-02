const defaultState = {
    username: null,
    password: null,
    password_confirmation: null,
    email: null,
    currentUserData: {}
}

function userReducer(prevState = defaultState, action) {
    switch(action.type) {
        case "HANDLE_CHANGE":
            let fieldKey = Object.keys(action.payload)[0];
            return {
                ...prevState,
                [fieldKey]: action.payload[fieldKey]
            }
        case "SET_USER":
            return {
                ...prevState,
                currentUserData: action.payload
            }
        default:
            return prevState;
    }
}

export default userReducer;