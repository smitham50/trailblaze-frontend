const defaultState = {
  hikes: []
}

function myHikesReducer(prevState = defaultState, action) {
  switch (action.type) {
    case "SET_HIKES":
      return {
        ...prevState,
        hikes: action.payload
      }
    default:
      return prevState;
  }
}

export default myHikesReducer;