const defaultState = {
  flashMessage: false,
  alert: "",
  messages: [],
  username: "",
  password: "",
  passwordConfirmation: "",
  email: ""
}

function formReducer(prevState = defaultState, action) {
  switch (action.type) {
    case "SET_FLASH_MESSAGE":
      const { alert, messages } = action.payload;
      return {
        ...prevState,
        flashMessage: true,
        alert: alert,
        messages: messages
      }
    case "UNMOUNT_FLASH_MESSAGE":
      return {
        ...prevState,
        flashMessage: false,
        alert: "",
        messages: []
      }
    case "HANDLE_CHANGE":
      let inputField = Object.keys(action.payload)[0];
      return {
        ...prevState,
        [inputField]: action.payload[inputField]
      }
    default:
      return prevState;
  }
}

export default formReducer;