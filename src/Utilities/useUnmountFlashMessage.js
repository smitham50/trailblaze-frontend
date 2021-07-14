import { useDispatch } from "react-redux";

export default function useUnmountFlashMessage() {
  const dispatch = useDispatch();

  return () => {
    dispatch({
      type: "UNMOUNT_FLASH_MESSAGE"
    });
  }
}