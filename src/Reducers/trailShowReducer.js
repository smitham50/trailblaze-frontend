const defaultState = {
    trail: null,
    fromSearchPage: false 
}

function trailSearchReducer(prevState = defaultState, action) {
    switch (action.type) {
        case "SET_TRAIL":
            return {
                ...prevState,
                trail: action.payload
            }
        case "SET_PREVIOUS_PAGE":
            const fromSearchPage = action.payload.pathname.slice(1,7) === "trails" ? true : false;
            console.log("...", fromSearchPage);
            return {
                ...prevState,
                fromSearchPage: fromSearchPage
            }
        default:
            return prevState;
    }
}

export default trailSearchReducer;