import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchFriends, fetchRooms, fetchUserId} from "../store/store.js";
import {useLocation} from "react-router-dom";

export const useStoreSession = () => {
  const { user } = useSelector((state) => state.user);

  const session = sessionStorage.getItem("SESSION_ID");
  const pathname = useLocation().pathname;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user && !session) return;

    if (!user && session) {
      if (!pathname.includes("/messages")) {
        sessionStorage.removeItem("SESSION_ID");
        return;
      }
      dispatch(fetchUserId(session || undefined));
      dispatch(fetchRooms(session || undefined));
      dispatch(fetchFriends(session || undefined));
      return;
    }

    if (user && !session) {
      sessionStorage.setItem("SESSION_ID", user.id);
      dispatch(fetchRooms(user.id));
      dispatch(fetchFriends(user.id));
    }
  }, [user, session, pathname, dispatch]);

  return null;
}