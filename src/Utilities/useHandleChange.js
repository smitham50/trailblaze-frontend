import { useDispatch } from "react-redux";

export default function useHandleChange(e) {
  const dispatch = useDispatch();

  return (e) => {
    dispatch({
      type: "HANDLE_CHANGE",
      payload: { [e.target.name]: e.target.value },
    });
  } 
}
