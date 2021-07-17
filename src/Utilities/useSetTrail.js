import { useDispatch } from 'react-redux';

export default function useSetTrail() {
  const dispatch = useDispatch();

  return (trail) => {
    dispatch({
      type: "SET_TRAIL",
      payload: trail,
    });
  }
}