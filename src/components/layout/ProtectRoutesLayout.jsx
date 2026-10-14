import {Outlet} from "react-router-dom";
import {Provider, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {
  fetchFriends,
  fetchMessages,
  fetchRooms, fetchStatus,
  fetchUserId,
  makeStore,
} from "../../store/store.js";
import PageLoading from "../ui/PageLoading.jsx";

export default function ProtectRoutesLayout() {
  const USER_ID = useSelector(state => state.messageUI.userId);

  const [updateUserDetails, setUpdateUserDetails] = useState(null);

  useEffect(() => {
    (async () => {
      const [user, { roomDetails, roomIds }, friends] = await Promise.all([
        fetchUserId(USER_ID),
        fetchRooms(USER_ID),
        fetchFriends(USER_ID),
      ]);

      const [messages, status] = await Promise.all([
        fetchMessages(roomIds, user.id),
        fetchStatus(roomIds, user.id),
      ]);

      setUpdateUserDetails(makeStore(user, roomDetails, friends, messages, status));
    })();
  }, [USER_ID]);

  if (!updateUserDetails) return <PageLoading/>;

  return (
    <Provider store={updateUserDetails}>
      <Outlet/>
    </Provider>
  );
}