import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import ProfileForm from "./profile-form";
import classes from "./user-profile.module.css";
import { headers } from "next/headers";
function UserProfile() {
  // Redirect away if NOT auth
  const [isLoading, setIsloading] = useState(true);
  function handleChangePassword({ oldPassword, newPassword }) {
    fetch("/api/user/change-password", {
      method: "PATCH",
      // body: JSON.stringify({ oldPassword, newPassword }),
      // headers: {
      //   // ...headers(),
      //   "Content-Type": "application/json",
      // },
    });
  }
  useEffect(() => {
    getSession().then((data) => {
      if (!data) {
        window.location.href("/auth");
      } else {
        setIsloading(false);
      }
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm changePassword={handleChangePassword} />
    </section>
  );
}

export default UserProfile;
