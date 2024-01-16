import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();
  function handeleClick() {
    fetch("/api/restricted");
  }
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut({redirect:false})}>Sign out</button>
        <button onClick={handeleClick}>test Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn("credentials", {redirect: false})}>Sign in</button>
      <button onClick={handeleClick}>test Sign in</button>
    </>
  );
}
