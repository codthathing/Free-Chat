import {Outlet} from "react-router-dom";
import {Provider, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {
  fetchFriends,
  fetchMessages,
  fetchRooms,
  fetchUserId,
  makeStore,
} from "../../store/store.js";

export default function ProtectRoutesLayout() {
  const USER_ID = useSelector(state => state.messageUI.userId);

  const [updateUserDetails, setUpdateUserDetails] = useState(null);

  useEffect(() => {
    (async () => {
      const user = await fetchUserId(USER_ID);
      const {roomDetails, roomIds} = await fetchRooms(USER_ID);
      const friends = await fetchFriends(USER_ID);
      const messages = await fetchMessages(roomIds, user.id);
      const status = await fetchMessages(roomIds, user.id);

      setUpdateUserDetails(makeStore(user, roomDetails, friends, messages, status));
    })();
  }, [USER_ID]);

  if (!updateUserDetails) return null;

  return (
    <Provider store={updateUserDetails}>
      <Outlet/>
    </Provider>
  );
}