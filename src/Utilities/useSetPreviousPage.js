import { useDispatch } from 'react-redux';

export default function useSetPreviousPage() {
  const dispatch = useDispatch();

  return (location) => {
    dispatch({
      type: "SET_PREVIOUS_PAGE",
      payload: location,
    });
  }
}