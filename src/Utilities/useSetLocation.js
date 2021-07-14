import { useDispatch } from "react-redux";

export default function useSetLocation() {
  const dispatch = useDispatch();

  return (coords) => {
    dispatch({
      type: "SET_LOCATION",
      payload: coords
    });
  }
}