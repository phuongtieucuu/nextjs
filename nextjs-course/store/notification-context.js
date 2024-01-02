import { createContext, useState } from "react";

const NotificationContext = createContext({
  notification: null,
  showNotification: function () {},
  hideNotification: function () {},
});

export function NotificationContextProvider(props) {
  const [activeNoti, setActiveNote] = useState();

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
