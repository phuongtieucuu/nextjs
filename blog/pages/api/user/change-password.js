import { getSession } from "next-auth/react";
import { updatePassword } from "../../../dummy-data";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function handle(req, res) {
  if (req.method === "PATCH") {
    console.log("req.body", req.body);
    console.log("req.session", req.session);

    const session = await getSession({ req });
    console.log("session", session);
    if (!session) {
      return res.status(401).json({ message: "Not Authenticated!!" });
    }
    const userEmail = session.user.email;
    const { oldPassword, newPassword } = req.body;
    const data = updatePassword({ email: userEmail, oldPassword, newPassword });
    if (!data) {
      return res.status(401).json({ message: "Email or Password invalid!!" });
    }
    return res.status(200).json({ email: userEmail });
  }
}
