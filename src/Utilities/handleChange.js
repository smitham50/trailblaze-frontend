import { useDispatch } from "react-redux";

export default function useHandleChange(e) {
  const dispatch = useDispatch();

  dispatch({
    type: "HANDLE_CHANGE",
    payload: { [e.target.name]: e.target.value },
  });
}
