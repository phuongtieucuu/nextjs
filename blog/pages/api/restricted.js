import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";
import { getSession } from "next-auth/react";
export default async (req, res) => {
  const session = await getSession({ req });
  console.log({ session });
  if (session) {
    res.json({ message: "Success!!" });
  } else {
    res.json({ message: "Failed!!" });
  }
};
