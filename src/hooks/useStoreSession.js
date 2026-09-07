import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchFriends, fetchRooms, fetchUserId} from "../store/store.js";

export const useStoreSession = () => {
  const { user } = useSelector((state) => state.user);

  const USER_ID = sessionStorage.getItem("USER_ID");
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user && !USER_ID) return;

    if (!user && USER_ID) {
      dispatch(fetchUserId(USER_ID || undefined));
      dispatch(fetchRooms(USER_ID || undefined));
      dispatch(fetchFriends(USER_ID || undefined));
      return;
    }

    if (user && !USER_ID) {
      sessionStorage.setItem("USER_ID", user.id);
      dispatch(fetchRooms(user.id));
      dispatch(fetchFriends(user.id));
    }
  }, [user, USER_ID, dispatch]);

  return null;
}