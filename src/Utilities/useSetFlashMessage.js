import { useDispatch } from "react-redux";

export default function useSetFlashMessage() {
  const dispatch = useDispatch();

  return (alert, messages) => {
    dispatch({
      type: "SET_FLASH_MESSAGE",
      payload: {
        alert,
        messages
      }
    });
  }
}