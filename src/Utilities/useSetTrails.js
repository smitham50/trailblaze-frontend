import { useDispatch } from 'react-redux';

export default function useSetTrails() {
  const dispatch = useDispatch();

  return (trails) => {
    dispatch({
      type: "SET_TRAILS",
      payload: trails
    });
  }
}