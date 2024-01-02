import { createContext, useEffect, useState } from "react";

const NotificationContext = createContext({
  notification: null,
  showNotification: function () {},
  hideNotification: function () {},
});

export function NotificationContextProvider(props) {
  const [activeNoti, setActiveNote] = useState();

  useEffect(() => {
    if (activeNoti?.status === "success" || activeNoti?.status === "error") {
      const timer = setTimeout(() => {
        setActiveNote(null);
        clearTimeout(timer);
      }, 3000);
    }

    // return () => clearTimeout(timer)
  }, [activeNoti]);

  function showNotification(noti) {
    setActiveNote(noti);
  }
  function hideNotification() {
    setActiveNote(null);
  }

  const context = {
    notification: activeNoti,
    showNotification,
    hideNotification,
  };
  // useState
  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
