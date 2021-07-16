const defaultState = {
    currentUserData: {},
    latitude: null,
    longitude: null
}

function userReducer(prevState = defaultState, action) {
    switch(action.type) {
        case "SET_USER":
            return {
                ...prevState,
                currentUserData: action.payload
            }
        case "CLEAR_USER":
            return {
                ...prevState,
                latitude: "",
                longitude: "",
                currentUserData: {}
            }
        case "SET_LOCATION":
            const coordinates = action.payload.coords;
            if (!localStorage.getItem('latitude')) {
                localStorage.setItem('latitude', coordinates.latitude)
                localStorage.setItem('longitude', coordinates.longitude);
            }
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