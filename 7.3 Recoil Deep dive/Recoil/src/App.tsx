import { useState } from "react";

import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import { jobAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector, totalNumberNotification } from "./atom";


function App() {
  return <RecoilRoot>
    <MainFun/>
  </RecoilRoot>;
}

function MainFun() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobNotificationCount = useRecoilValue(jobAtom);
  const messagingkNotificationCount = useRecoilValue(messagingAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const totalNotification = useRecoilValue(totalNotificationSelector)
  return (
    <>
      <button>Home</button>
      <button>
        My network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs ({jobNotificationCount})</button>
      <button>Messaging ({messagingkNotificationCount})</button>
      <button>Notifications ({notificationCount})</button>
      <button>Me({totalNotification})</button>
    </>
  );
}

export default App;
