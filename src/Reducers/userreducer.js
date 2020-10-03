const defaultState = {
    username: null,
    password: null,
    password_confirmation: null,
    email: null,
    currentUserData: {},
    latitude: null,
    longitude: null
}

function userReducer(prevState = defaultState, action) {
    console.log(prevState)
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
                currentUserData: action.payload,
                username: null,
                password: null,
                password_confirmation: null,
                email: null
            }
        case "CLEAR_USER":
            return {
                ...prevState,
                username: null,
                password: null,
                password_confirmation: null,
                email: null,
                latitude: null,
                longitude: null,
                currentUserData: {}
            }
        case "SET_LOCATION":
            const coordinates = action.payload.coords;
            return {
                ...prevState,
                latitude: coordinates.latitude,
                longitude: coordinates.longitude
            }
        default:
            return prevState;
    }
}

export default userReducer;