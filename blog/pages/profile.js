import UserProfile from "../components/profile/user-profile";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { getSession } from "next-auth/react";
function ProfilePage() {
  return <UserProfile />;
}

// export async function getServerSideProps(context) {
//   // const session = await getServerSession(context.req, context.res, authOptions);
//   const session = await getSession({ req: context.req });
//   console.log({ session });
//   if (!session) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       session,
//     },
//   };
// }

export default ProfilePage;
