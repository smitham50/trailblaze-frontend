import { useDispatch } from 'react-redux';

export default function useClearUser() {
  const dispatch = useDispatch();

  return () => {
    dispatch({
      type: 'CLEAR_USER',
    });
  }
}