import { useDispatch } from 'react-redux';

export default function useSetHikes() {
  const dispatch = useDispatch();

  return (hikes) => {
    dispatch({
      type: "SET_HIKES",
      payload: hikes,
    });
  }
}