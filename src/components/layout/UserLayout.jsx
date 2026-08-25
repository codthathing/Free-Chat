import {Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchMessages, fetchStatus, selectIdsRooms} from "../../store/store.js";

export default function UserLayout() {
  const roomIds = useSelector(selectIdsRooms);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  
  useEffect(() => {
    if (!user) return;

    dispatch(fetchMessages({room_ids: roomIds, id: user.id}));
    dispatch(fetchStatus({roomIds: roomIds, u_id: user.id}));
  }, [roomIds, user, dispatch]);

  return (
    <Outlet />
  );
}