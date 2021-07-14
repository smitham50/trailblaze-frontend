import { useDispatch } from "react-redux";

export default function useSetUser() {
  const dispatch = useDispatch();

  return (user) => {
    dispatch({
      type: "SET_USER",
      payload: user,
    });
  }
}