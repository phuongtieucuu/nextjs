import Link from "next/link";

import { signOut, useSession, getSession } from "next-auth/react";

import classes from "./main-navigation.module.css";

function MainNavigation() {
  const session = useSession();

  function logOut() {
    signOut({ redirect: false });
  }
  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>Next Auth</div>
      </Link>
      <nav>
        <ul>
          {!session.data && (
            <li>
              <Link href="/auth">Login</Link>
            </li>
          )}
          {session.data && (
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          )}

          {session.data && (
            <li>
              <button onClick={logOut}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
