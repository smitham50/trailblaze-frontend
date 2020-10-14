const defaultState = {
   trail: null
}

function trailSearchReducer(prevState = defaultState, action) {
    switch (action.type) {
        case "SET_TRAIL":
            return {
                ...prevState,
                trail: action.payload
            }
        default:
            return prevState;
    }
}

export default trailSearchReducer;