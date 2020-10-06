const defaultState = {
    distance: "",
    mileage: "",
    difficulty: ""
}

function trailSearchReducer(prevState = defaultState, action) {
    switch (action.type) {
        case "HANDLE_CHANGE":
            let fieldKey = Object.keys(action.payload)[0];
            return {
                ...prevState,
                [fieldKey]: action.payload[fieldKey]
            }
        default:
            return prevState;
    }
}

export default trailSearchReducer;