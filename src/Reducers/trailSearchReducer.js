const defaultState = {
    distance: 60,
    mileage: "Less than 3",
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
            localStorage.removeItem('trails');
            localStorage.trails = action.payload.map(trail => {
                return trail.id;
            });
            return {
                ...prevState,
                trails: action.payload
            }
        default:
            return prevState;
    }
}

export default trailSearchReducer;