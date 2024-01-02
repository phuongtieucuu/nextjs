import { Fragment, useContext } from "react";

import NotificationContext from "../../store/notification-context";
import Notification from "../ui/notification";
import MainHeader from "./main-header";

function Layout(props) {
  const notiCtx = useContext(NotificationContext);
  const noti = notiCtx.notification;
  return (
    <Fragment>

      <MainHeader />

      <main>{props.children}</main>
      {noti && (
        <Notification
          title={noti.title}
          message={noti.message}
          status={noti.status}
        />
      )}
    </Fragment>
  );
}

export default Layout;
