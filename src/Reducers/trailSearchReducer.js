const defaultState = {
    distance: "",
    mileage: "",
    difficulty: "",
    trails: []
}

function trailSearchReducer(prevState = defaultState, action) {
    switch (action.type) {
        case "HANDLE_CHANGE":
            let fieldKey = Object.keys(action.payload)[0];
            return {
                ...prevState,
                [fieldKey]: action.payload[fieldKey]
            }
        case "SET_TRAILS":
            return {
                ...prevState,
                trails: action.payload
            }
        default:
            return prevState;
    }
}

export default trailSearchReducer;