import {Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchMessages, fetchStatus, selectIdsRooms} from "../../store/store.js";
import HomeMobileSection from "../home/HomeMobileSection.jsx";
import RoomPage from "../../pages/RoomPage.jsx";
import FilterPage from "../../pages/FilterPage.jsx";
import AppDesktopLayout from "./AppDesktopLayout.jsx";
import HomeTabletSection from "../home/HomeTabletSection.jsx";
import FilterSection from "../filter/FilterSection.jsx";
import {useWindowWidth} from "../../hooks/useWindowWidth.js";
import CallPage from "../../pages/CallPage.jsx";
import CallSection from "../call/CallSection.jsx";
import SplashPage from "../../pages/SplashPage.jsx";

export default function ProtectRoutesLayout() {
  const roomIds = useSelector(selectIdsRooms);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const width = useWindowWidth();
  const USER_ID = sessionStorage.getItem("USER_ID");

  useEffect(() => {
    if (!user) return;

    dispatch(fetchMessages({room_ids: roomIds, id: user.id}));
    dispatch(fetchStatus({roomIds: roomIds, u_id: user.id}));
  }, [roomIds, user, dispatch]);

  return (
    <>
      {width < 768 ? (
        <Route>
          <Route index element={USER_ID ? <HomeMobileSection width={width} /> : <SplashPage />} />
          <Route path="/room/:room_id" element={<RoomPage className={"h-dvh"} />} />
          <Route path="/create-filter" element={<FilterPage />} />
          <Route path="/calls" element={<CallPage />} />
        </Route>
      ) : (
        <>
          <Route index element={USER_ID ? <HomeTabletSection width={width} home={true} /> : <SplashPage />} />
          <Route element={<AppDesktopLayout />}>
            <Route path="/room/:room_id" element={<HomeTabletSection home={false} width={width}><RoomPage /></HomeTabletSection>} />
            <Route path="/create-filter" element={<FilterSection />} />
            <Route path="/calls" element={<CallSection />} />
          </Route>
        </>
      )}
    </>
  );
}